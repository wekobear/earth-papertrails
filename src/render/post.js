import * as THREE from 'three';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

const AO_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tDepth;
uniform vec4 uProj;
uniform vec2 uTexel;
uniform vec3 uAoParams;

float viewZ(float d) {
  return (uProj.x * uProj.y) / max(1e-5, (uProj.y - d * (uProj.y - uProj.x)));
}

vec3 vpos(vec2 uv) {
  float z = viewZ(texture2D(tDepth, uv).r);
  return vec3((uv * 2.0 - 1.0) * vec2(uProj.z * uProj.w, uProj.z) * z, -z);
}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

void main() {
  float d0 = texture2D(tDepth, vUv).r;
  if (d0 >= 0.99995) {
    gl_FragColor = vec4(1.0);
    return;
  }
  vec3 P = vpos(vUv);
  vec2 t = uTexel * 2.0;
  vec3 pr = vpos(vUv + vec2(t.x, 0.0));
  vec3 pl = vpos(vUv - vec2(t.x, 0.0));
  vec3 pu = vpos(vUv + vec2(0.0, t.y));
  vec3 pd = vpos(vUv - vec2(0.0, t.y));
  vec3 dxv = abs(pr.z - P.z) < abs(P.z - pl.z) ? pr - P : P - pl;
  vec3 dyv = abs(pu.z - P.z) < abs(P.z - pd.z) ? pu - P : P - pd;
  vec3 N = normalize(cross(dxv, dyv));

  float z = -P.z;
  float rUv = uAoParams.x / max(0.01, 2.0 * z * uProj.z);
  float phi = ign(gl_FragCoord.xy) * 6.2831853;
  float occ = 0.0;
  const int TAPS = 8;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i);
    float r = sqrt((fi + 0.5) / float(TAPS));
    float a = fi * 2.39996323 + phi;
    vec2 o = vec2(cos(a), sin(a)) * r * rUv;
    vec3 v = vpos(clamp(vUv + vec2(o.x / uProj.w, o.y), 0.001, 0.999)) - P;
    float dv = dot(v, v);
    float fall = clamp(1.0 - dv / (uAoParams.x * uAoParams.x), 0.0, 1.0);
    occ += min(max(dot(v, N) - uAoParams.z, 0.0) / (dv + 1e-4) * uAoParams.x, 1.5) * fall;
  }
  float ao = clamp(1.0 - uAoParams.y * occ / float(TAPS), 0.0, 1.0);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`;

const COMPOSITE_FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tDepth;
uniform sampler2D tAo;
uniform vec4 uProj;
uniform vec2 uTexel;
uniform vec4 uTone;     // exposure, contrast, saturation, dofAmount
uniform vec3 uAoTint;
uniform vec3 uShadowTint;
uniform float uTime;

float viewZ(float d) {
  return (uProj.x * uProj.y) / max(1e-5, (uProj.y - d * (uProj.y - uProj.x)));
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 sharp = texture2D(tScene, vUv).rgb;

  // Macro Tilt-Shift Bokeh DoF (9-tap disc blur outside sharp center band)
  if (uTone.w > 0.01) {
    float band = abs(vUv.y - 0.47);
    float blurAmt = smoothstep(0.15, 0.46, band) * uTone.w;
    if (blurAmt > 0.01) {
      vec2 r = uTexel * (4.2 * blurAmt);
      vec3 b = sharp * 0.2;
      b += texture2D(tScene, vUv + vec2(r.x, 0.0)).rgb * 0.1;
      b += texture2D(tScene, vUv - vec2(r.x, 0.0)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(0.0, r.y)).rgb * 0.1;
      b += texture2D(tScene, vUv - vec2(0.0, r.y)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(r.x * 0.7, r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(-r.x * 0.7, r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(r.x * 0.7, -r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(-r.x * 0.7, -r.y * 0.7)).rgb * 0.1;
      sharp = mix(sharp, b, clamp(blurAmt * 0.92, 0.0, 0.92));
    }
  }

  // Contact AO
  float ao = 0.25 * (
    texture2D(tAo, vUv + uTexel * vec2(1.0, 1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(-1.0, 1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(1.0, -1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(-1.0, -1.0)).r
  );
  sharp *= mix(uAoTint, vec3(1.0), ao);

  // Subtle dark cardstock edge rim along depth silhouettes
  float z = viewZ(texture2D(tDepth, vUv).r);
  vec2 ox = vec2(uTexel.x * 1.15, 0.0);
  vec2 oy = vec2(0.0, uTexel.y * 1.15);
  float zfar = max(
    max(viewZ(texture2D(tDepth, vUv + ox).r), viewZ(texture2D(tDepth, vUv - ox).r)),
    max(viewZ(texture2D(tDepth, vUv + oy).r), viewZ(texture2D(tDepth, vUv - oy).r))
  );
  float edge = smoothstep(0.0045 * z, 0.014 * z, zfar - z) * 0.24;
  sharp = mix(sharp, sharp * vec3(0.76, 0.67, 0.58), edge);

  // Vignette
  vec2 vc = vUv - 0.5;
  sharp *= 1.0 - 0.14 * smoothstep(0.2, 0.74, dot(vc, vc));

  // ACES + warm filmic grade
  vec3 col = aces(sharp * uTone.x * vec3(1.03, 0.98, 0.99));
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, uTone.z);
  col = toSRGB(max(col, 0.0));
  col = (col - 0.44) * uTone.y + 0.44;
  col += uShadowTint * 0.03 * (1.0 - smoothstep(0.0, 0.45, l));

  // Fine tactile paper grain
  float grain = (hash12(gl_FragCoord.xy + vec2(uTime * 19.0)) - 0.5) * 0.016;
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

export function createPost({ renderer, scene, camera }) {
  const canFloat =
    renderer.capabilities.isWebGL2 !== false &&
    (renderer.extensions.has('EXT_color_buffer_float') || renderer.extensions.has('EXT_color_buffer_half_float'));

  if (!canFloat) {
    return {
      setMode() {},
      render(_dt, exposure = 0.9) {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = exposure;
        renderer.render(scene, camera);
      },
      dispose() {},
    };
  }

  let width = 2;
  let height = 2;
  let dofAmount = 0;

  const quadScene = new THREE.Scene();
  const quadCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const tri = new THREE.BufferGeometry();
  tri.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const quad = new THREE.Mesh(tri, null);
  quad.frustumCulled = false;
  quadScene.add(quad);

  const uProj = { value: new THREE.Vector4(0.1, 100, 0.35, 1.6) };
  const uTexel = { value: new THREE.Vector2(1 / 1280, 1 / 720) };

  const aoMat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: AO_FRAG,
    uniforms: {
      tDepth: { value: null },
      uProj,
      uTexel,
      uAoParams: { value: new THREE.Vector3(0.28, 1.05, 0.012) },
    },
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });

  const compMat = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: COMPOSITE_FRAG,
    uniforms: {
      tScene: { value: null },
      tDepth: { value: null },
      tAo: { value: null },
      uProj,
      uTexel,
      uTone: { value: new THREE.Vector4(0.88, 1.06, 0.95, 0) },
      uAoTint: { value: new THREE.Color('#5a3214') },
      uShadowTint: { value: new THREE.Color('#3a200c') },
      uTime: { value: 0 },
    },
    depthTest: false,
    depthWrite: false,
    toneMapped: false,
  });

  let sceneRT = null;
  let aoRT = null;
  const sizeVec = new THREE.Vector2();

  function buildTargets(w, h) {
    if (sceneRT) {
      sceneRT.depthTexture?.dispose();
      sceneRT.dispose();
    }
    if (aoRT) aoRT.dispose();

    sceneRT = new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: true,
      samples: 2,
    });
    sceneRT.texture.colorSpace = THREE.NoColorSpace;
    const depth = new THREE.DepthTexture(w, h, THREE.UnsignedIntType);
    depth.format = THREE.DepthFormat;
    depth.minFilter = depth.magFilter = THREE.NearestFilter;
    sceneRT.depthTexture = depth;

    const hw = Math.max(2, Math.round(w * 0.5));
    const hh = Math.max(2, Math.round(h * 0.5));
    aoRT = new THREE.WebGLRenderTarget(hw, hh, {
      type: THREE.UnsignedByteType,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
    });
    uTexel.value.set(1 / w, 1 / h);
  }

  function ensureSize() {
    renderer.getDrawingBufferSize(sizeVec);
    const w = Math.max(2, Math.floor(sizeVec.x));
    const h = Math.max(2, Math.floor(sizeVec.y));
    if (w !== width || h !== height || !sceneRT) {
      width = w;
      height = h;
      buildTargets(w, h);
    }
  }

  return {
    setMode(mode) {
      if (mode === 'bookshelf') {
        dofAmount = 0;
        aoMat.uniforms.uAoParams.value.set(0.32, 0.95, 0.015);
      } else if (mode === 'book') {
        dofAmount = 0.14;
        aoMat.uniforms.uAoParams.value.set(0.24, 1.0, 0.012);
      } else {
        dofAmount = 0.82;
        aoMat.uniforms.uAoParams.value.set(0.3, 1.15, 0.012);
      }
    },
    render(dt, exposure = 0.88) {
      ensureSize();
      const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
      uProj.value.set(camera.near, camera.far, tanHalf, camera.aspect || width / height);
      compMat.uniforms.uTone.value.set(exposure, 1.06, 0.95, dofAmount);
      compMat.uniforms.uTime.value = (compMat.uniforms.uTime.value + dt) % 60;

      renderer.setRenderTarget(sceneRT);
      renderer.clear();
      renderer.render(scene, camera);

      aoMat.uniforms.tDepth.value = sceneRT.depthTexture;
      quad.material = aoMat;
      renderer.setRenderTarget(aoRT);
      renderer.render(quadScene, quadCam);

      compMat.uniforms.tScene.value = sceneRT.texture;
      compMat.uniforms.tDepth.value = sceneRT.depthTexture;
      compMat.uniforms.tAo.value = aoRT.texture;
      quad.material = compMat;
      renderer.setRenderTarget(null);
      renderer.render(quadScene, quadCam);
    },
    dispose() {
      sceneRT?.depthTexture?.dispose();
      sceneRT?.dispose();
      aoRT?.dispose();
      aoMat.dispose();
      compMat.dispose();
      tri.dispose();
    },
  };
}
