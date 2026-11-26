import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smooth(t) {
  return t * t * (3 - 2 * t);
}

function addValueNoise(out, N, cells, amp, rng) {
  const g = new Float32Array(cells * cells);
  for (let i = 0; i < g.length; i++) g[i] = rng() - 0.5;
  for (let y = 0; y < N; y++) {
    const fy = (y / N) * cells;
    const iy = Math.floor(fy);
    const ty = smooth(fy - iy);
    const y0 = (iy % cells) * cells;
    const y1 = ((iy + 1) % cells) * cells;
    for (let x = 0; x < N; x++) {
      const fx = (x / N) * cells;
      const ix = Math.floor(fx);
      const tx = smooth(fx - ix);
      const x0 = ix % cells;
      const x1 = (ix + 1) % cells;
      const a = g[y0 + x0] + (g[y0 + x1] - g[y0 + x0]) * tx;
      const b = g[y1 + x0] + (g[y1 + x1] - g[y1 + x0]) * tx;
      out[y * N + x] += amp * (a + (b - a) * ty);
    }
  }
}

function addPebbles(out, N, cells, amp, rng) {
  const px = new Float32Array(cells * cells);
  const py = new Float32Array(cells * cells);
  const ph = new Float32Array(cells * cells);
  for (let i = 0; i < px.length; i++) {
    px[i] = rng();
    py[i] = rng();
    ph[i] = 0.6 + rng() * 0.4;
  }
  for (let y = 0; y < N; y++) {
    const fy = (y / N) * cells;
    const cy = Math.floor(fy);
    for (let x = 0; x < N; x++) {
      const fx = (x / N) * cells;
      const cx = Math.floor(fx);
      let best = 9;
      let bh = 1;
      for (let j = -1; j <= 1; j++) {
        const yy = (cy + j + cells) % cells;
        for (let i = -1; i <= 1; i++) {
          const xx = (cx + i + cells) % cells;
          const k = yy * cells + xx;
          const dx = cx + i + px[k] - fx;
          const dy = cy + j + py[k] - fy;
          const d = dx * dx + dy * dy;
          if (d < best) {
            best = d;
            bh = ph[k];
          }
        }
      }
      const d = Math.min(1, Math.sqrt(best) / 0.75);
      out[y * N + x] += amp * ((1 - d * d) * bh - 0.45);
    }
  }
}

function addFibres(out, N, count, amp, rng) {
  for (let f = 0; f < count; f++) {
    let x = rng() * N;
    let y = rng() * N;
    let a = rng() * Math.PI * 2;
    const len = 10 + rng() * 44;
    const curve = (rng() - 0.5) * 0.12;
    const s = (rng() < 0.72 ? 1 : -0.8) * amp * (0.5 + rng() * 0.7);
    for (let i = 0; i < len; i++) {
      const t = i / len;
      const w = s * Math.sin(Math.PI * t);
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      const fx = x - ix;
      const fy = y - iy;
      const x0 = ((ix % N) + N) % N;
      const y0 = ((iy % N) + N) % N;
      const x1 = (x0 + 1) % N;
      const y1 = (y0 + 1) % N;
      out[y0 * N + x0] += w * (1 - fx) * (1 - fy);
      out[y0 * N + x1] += w * fx * (1 - fy);
      out[y1 * N + x0] += w * (1 - fx) * fy;
      out[y1 * N + x1] += w * fx * fy;
      x += Math.cos(a);
      y += Math.sin(a);
      a += curve;
    }
  }
}

function normalise(a) {
  let m = 0;
  for (let i = 0; i < a.length; i++) m += a[i];
  m /= a.length;
  let v = 0;
  for (let i = 0; i < a.length; i++) {
    a[i] -= m;
    v += a[i] * a[i];
  }
  const s = 1 / Math.sqrt(v / a.length + 1e-12);
  for (let i = 0; i < a.length; i++) a[i] *= s;
  return a;
}

function makeProceduralFibre(N = 512) {
  const rng = mulberry32(0x51f1b2e);
  const h = new Float32Array(N * N);
  addPebbles(h, N, 96, 0.8, rng);
  addPebbles(h, N, 190, 0.5, rng);
  addValueNoise(h, N, 160, 0.5, rng);
  addValueNoise(h, N, 256, 0.4, rng);
  addFibres(h, N, 2200, 0.7, rng);
  normalise(h);

  const cloud = new Float32Array(N * N);
  addValueNoise(cloud, N, 9, 1.0, rng);
  addValueNoise(cloud, N, 17, 0.7, rng);
  addValueNoise(cloud, N, 36, 0.35, rng);
  normalise(cloud);

  const data = new Uint8Array(N * N * 4);
  const normalStrength = 0.24;
  for (let y = 0; y < N; y++) {
    const yu = ((y + N - 1) % N) * N;
    const yd = ((y + 1) % N) * N;
    for (let x = 0; x < N; x++) {
      const i = y * N + x;
      const dx = (h[y * N + ((x + 1) % N)] - h[y * N + ((x + N - 1) % N)]) * normalStrength;
      const dy = (h[yd + x] - h[yu + x]) * normalStrength;
      const il = 1 / Math.sqrt(dx * dx + dy * dy + 1);
      data[i * 4] = Math.max(0, Math.min(255, Math.round((-dx * il * 0.5 + 0.5) * 255)));
      data[i * 4 + 1] = Math.max(0, Math.min(255, Math.round((-dy * il * 0.5 + 0.5) * 255)));
      data[i * 4 + 2] = Math.max(0, Math.min(255, Math.round((0.5 + h[i] * 0.16) * 255)));
      data[i * 4 + 3] = Math.max(0, Math.min(255, Math.round((0.5 + cloud[i] * 0.16) * 255)));
    }
  }
  const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat, THREE.UnsignedByteType);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.colorSpace = THREE.NoColorSpace;
  tex.flipY = false;
  tex.needsUpdate = true;
  return tex;
}

export const paperUniforms = {
  uPaperFibreTex: { value: null },
  uPaperFibre: { value: new THREE.Vector4(1 / 2.6, 0.095, 0.085, 0.34) },
  uPaperFibre2: { value: new THREE.Vector4(0.42, 3.73, 0.85, 0.27) },
  uPaperLight: { value: new THREE.Vector4(0.3, 0.32, 0.55, 0.06) },
  uPaperTransTint: { value: new THREE.Color('#ffb070') },
  uPaperShadowLeak: { value: new THREE.Color('#7c5634') },
  // Night ground light pools (up to 6 warm lantern/lamp pools on the paper surface)
  uPaperPool: { value: [0, 1, 2, 3, 4, 5].map(() => new THREE.Vector4(0, 0, 0, 0)) },
  uPaperPoolCol: { value: new THREE.Vector4(1.0, 0.72, 0.36, 0.0) },
};

export function setGroundLightPools(pools = [], radius = 2.6, strengthScale = 0) {
  const arr = paperUniforms.uPaperPool.value;
  for (let i = 0; i < 6; i++) {
    const p = pools[i];
    if (p && strengthScale > 0.01) {
      arr[i].set(p.x, p.y, p.z, (p.strength ?? 1) * strengthScale);
    } else {
      arr[i].set(0, 0, 0, 0);
    }
  }
  paperUniforms.uPaperPoolCol.value.w = strengthScale > 0.01 ? radius : 0;
}

const VERT_PARS = /* glsl */ `
varying vec3 vPaperPos;
varying vec3 vPaperNrm;
varying float vPaperTone;
varying vec3 vPaperW;
float paperHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float paperVNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(paperHash(i), paperHash(i + vec2(1.0, 0.0)), f.x),
    mix(paperHash(i + vec2(0.0, 1.0)), paperHash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}
`;

const VERT_MAIN = /* glsl */ `
{
  mat4 paperM = modelMatrix;
  float paperId = 0.0;
  #ifdef USE_INSTANCING
    paperM = paperM * instanceMatrix;
    paperId = float(gl_InstanceID);
  #endif
  vec4 wp = paperM * vec4(transformed, 1.0);
  vPaperW = wp.xyz;
  #ifdef PAPER_FIBRE_WORLD
    vPaperPos = wp.xyz;
    vPaperNrm = normalize(mat3(paperM) * objectNormal);
  #else
    vPaperPos = transformed * max(0.001, length(paperM[0].xyz));
    vPaperNrm = objectNormal;
  #endif
  vec3 paperO = paperM[3].xyz;
  float paperTn = paperVNoise(paperO.xz * 1.13 + paperO.y * 2.71);
  paperTn = fract(paperTn + paperHash(vec2(paperId, 3.7)) * step(0.5, paperId));
  vPaperTone = paperTn * 2.0 - 1.0;
}
`;

const FRAG_PARS = /* glsl */ `
uniform sampler2D uPaperFibreTex;
uniform vec4 uPaperFibre;
uniform vec4 uPaperFibre2;
uniform vec4 uPaperLight;
uniform vec3 uPaperTransTint;
uniform vec3 uPaperShadowLeak;
uniform vec4 uPaperPool[6];
uniform vec4 uPaperPoolCol;
varying vec3 vPaperPos;
varying vec3 vPaperNrm;
varying float vPaperTone;
varying vec3 vPaperW;
`;

const FRAG_LIGHTING = /* glsl */ `
varying vec3 vViewPosition;

struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};

void RE_Direct_Paper(
  const in IncidentLight directLight,
  const in vec3 geometryPosition,
  const in vec3 geometryNormal,
  const in vec3 geometryViewDir,
  const in vec3 geometryClearcoatNormal,
  const in LambertMaterial material,
  inout ReflectedLight reflectedLight
) {
  float nl = dot(geometryNormal, directLight.direction);
  float wrap = uPaperLight.x;
  float front = clamp((nl + wrap) / (1.0 + wrap), 0.0, 1.0);
  vec3 irradiance = front * directLight.color;
  float back = clamp((-nl + 0.1) / 1.1, 0.0, 1.0);
  irradiance += back * uPaperLight.y * uPaperTransTint * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse_Paper(
  const in vec3 irradiance,
  const in vec3 geometryPosition,
  const in vec3 geometryNormal,
  const in vec3 geometryViewDir,
  const in vec3 geometryClearcoatNormal,
  const in LambertMaterial material,
  inout ReflectedLight reflectedLight
) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

#define RE_Direct RE_Direct_Paper
#define RE_IndirectDiffuse RE_IndirectDiffuse_Paper
`;

const FRAG_FIBRE = /* glsl */ `
vec3 paperAN = abs(vPaperNrm);
vec2 paperUv = (paperAN.y >= max(paperAN.x, paperAN.z))
  ? vPaperPos.xz
  : ((paperAN.x > paperAN.z) ? vPaperPos.zy : vPaperPos.xy);
paperUv *= uPaperFibre.x;
vec4 paperF1 = texture2D(uPaperFibreTex, paperUv, -0.5);
vec4 paperF2 = texture2D(uPaperFibreTex, paperUv * uPaperFibre2.y + vec2(0.37, 0.61), -0.3);
float paperTooth = (paperF1.b - 0.5) + (paperF2.b - 0.5) * uPaperFibre2.x;
float paperCloud = paperF1.a - 0.5;
#ifndef PAPER_NO_FIBRE
  vec4 paperF3 = texture2D(uPaperFibreTex, paperUv.yx * uPaperFibre2.w + vec2(0.13, 0.71), 1.5);
  diffuseColor.rgb *= max(0.0, 1.0 + paperTooth * uPaperFibre.y * 5.8 + (paperCloud + (paperF3.a - 0.5) * 1.15) * uPaperFibre.z * 5.8);
#endif
#ifndef PAPER_NO_VARY
  diffuseColor.rgb *= (1.0 + vPaperTone * uPaperLight.w) * vec3(1.0 + vPaperTone * uPaperLight.w * 0.35, 1.0, 1.0 - vPaperTone * uPaperLight.w * 0.5);
#endif
`;

const FRAG_POOL = /* glsl */ `
if (uPaperPoolCol.w > 0.001) {
  float pL = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 pp = uPaperPool[i];
    if (pp.w > 0.0) {
      float pf = max(0.0, 1.0 - distance(vPaperW, pp.xyz) / uPaperPoolCol.w);
      pL += pp.w * pf * pf;
    }
  }
  totalEmissiveRadiance += diffuseColor.rgb * uPaperPoolCol.rgb * pL;
}
`;

const FRAG_NORMAL = /* glsl */ `
#ifndef PAPER_NO_FIBRE
{
  vec2 pn = (paperF1.rg - 0.5) * 2.0 + (paperF2.rg - 0.5) * 2.0 * uPaperFibre2.x;
  pn += (paperF3.gr - 0.5) * 2.0 * uPaperFibre2.z / max(uPaperFibre.w, 1e-3);
  vec3 q0 = dFdx(vViewPosition);
  vec3 q1 = dFdy(vViewPosition);
  vec2 st0 = dFdx(paperUv);
  vec2 st1 = dFdy(paperUv);
  vec3 q1perp = cross(q1, normal);
  vec3 q0perp = cross(normal, q0);
  vec3 pT = q1perp * st0.x + q0perp * st1.x;
  vec3 pB = q1perp * st0.y + q0perp * st1.y;
  float pdet = max(dot(pT, pT), dot(pB, pB));
  float pscale = (pdet == 0.0) ? 0.0 : inversesqrt(pdet);
  normal = normalize(normal + (pT * pn.x + pB * pn.y) * pscale * uPaperFibre.w);
}
#endif
`;

function extendPaperMaterial(material, flags) {
  material.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, paperUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + VERT_PARS)
      .replace('#include <project_vertex>', '#include <project_vertex>\n' + VERT_MAIN);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + FRAG_PARS)
      .replace('#include <lights_lambert_pars_fragment>', FRAG_LIGHTING)
      .replace('#include <color_fragment>', '#include <color_fragment>\n' + FRAG_FIBRE)
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + FRAG_POOL)
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n' + FRAG_NORMAL);
  };
  material.customProgramCacheKey = () => 'earth-papertrails-v2|' + JSON.stringify(flags);
}

export function createPaperMaterialFactory() {
  const fibreTex = makeProceduralFibre(512);
  paperUniforms.uPaperFibreTex.value = fibreTex;
  const cache = new Map();
  const glowMaterials = new Set();

  function paper(opts = {}) {
    const {
      color = PALETTE.paper,
      map = null,
      side = THREE.DoubleSide,
      emissive = null,
      emissiveIntensity = 1,
      transparent = false,
      opacity = 1,
      alphaTest = 0,
      fibre = 'local',
      vary = true,
      vertexColors = false,
      glowTag = false,
      depthWrite = true,
    } = opts;

    const colorKey = color && color.isColor ? '#' + color.getHexString() : String(color).toLowerCase();
    const emKey = emissive ? (emissive.isColor ? '#' + emissive.getHexString() : String(emissive).toLowerCase()) : '-';
    const key = [
      colorKey,
      map ? map.uuid : '-',
      side,
      emKey,
      emissive ? emissiveIntensity : 0,
      transparent ? 1 : 0,
      opacity,
      alphaTest,
      fibre,
      vary ? 1 : 0,
      vertexColors ? 1 : 0,
      glowTag ? 1 : 0,
      depthWrite ? 1 : 0,
    ].join('|');

    let mat = cache.get(key);
    if (!mat) {
      mat = new THREE.MeshLambertMaterial({
        color,
        map,
        side,
        transparent,
        opacity,
        alphaTest,
        vertexColors,
        depthWrite,
      });
      if (emissive) {
        mat.emissive = new THREE.Color(emissive);
        mat.emissiveIntensity = emissiveIntensity;
      }
      mat.shadowSide = THREE.DoubleSide;
      mat.defines = {};
      if (fibre === 'world') mat.defines.PAPER_FIBRE_WORLD = 1;
      if (fibre === 'none') mat.defines.PAPER_NO_FIBRE = 1;
      if (!vary) mat.defines.PAPER_NO_VARY = 1;
      extendPaperMaterial(mat, { fibre, vary: !!vary });
      cache.set(key, mat);
      if (glowTag || (emissive && emissiveIntensity > 0)) {
        mat.userData.baseEmissiveIntensity = emissiveIntensity;
        glowMaterials.add(mat);
      }
    }
    return mat;
  }

  return {
    paper,
    glowMaterials,
    fibreTex,
    dispose() {
      for (const m of cache.values()) m.dispose();
      cache.clear();
      fibreTex.dispose();
    },
  };
}

export function addCutEdgeLines(mesh, color = PALETTE.ink, opacity = 0.36, threshold = 24) {
  if (!mesh.geometry) return null;
  const edges = new THREE.EdgesGeometry(mesh.geometry, threshold);
  const line = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({
      color,
      transparent: opacity < 1,
      opacity,
      depthWrite: false,
    }),
  );
  line.raycast = () => {};
  mesh.add(line);
  return line;
}

// ---------------------------------------------------------------------------
// Procedural Canvas Textures (Walnut Wood, Spines, Covers, Walls, Floors, Polaroid)
// ---------------------------------------------------------------------------

export function createWoodTexture(dark = false) {
  const w = 512;
  const h = 512;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');
  const rng = mulberry32(dark ? 0x223344 : 0x556677);

  ctx.fillStyle = dark ? '#563924' : '#7c5436';
  ctx.fillRect(0, 0, w, h);

  // Subtle vertical wood grain streaks
  for (let i = 0; i < 160; i++) {
    const x = rng() * w;
    const width = 2 + rng() * 16;
    const alpha = 0.04 + rng() * 0.08;
    ctx.fillStyle = rng() > 0.5 ? `rgba(38, 22, 12, ${alpha})` : `rgba(182, 136, 94, ${alpha * 0.8})`;
    ctx.fillRect(x, 0, width, h);
  }
  for (let i = 0; i < 38; i++) {
    ctx.strokeStyle = `rgba(32, 18, 9, ${0.08 + rng() * 0.09})`;
    ctx.lineWidth = 1 + rng() * 2;
    ctx.beginPath();
    const x0 = rng() * w;
    ctx.moveTo(x0, 0);
    ctx.bezierCurveTo(x0 + (rng() - 0.5) * 18, h * 0.33, x0 + (rng() - 0.5) * 18, h * 0.66, x0 + (rng() - 0.5) * 10, h);
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

export function createBookSpineTexture(book) {
  const w = 256;
  const h = 768;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  ctx.fillStyle = book.spineColor || book.coverColor;
  ctx.fillRect(0, 0, w, h);

  // Cloth texture & edge shading
  const edgeGrad = ctx.createLinearGradient(0, 0, w, 0);
  edgeGrad.addColorStop(0, 'rgba(26, 14, 8, 0.28)');
  edgeGrad.addColorStop(0.14, 'rgba(255, 248, 232, 0.08)');
  edgeGrad.addColorStop(0.86, 'rgba(255, 248, 232, 0.04)');
  edgeGrad.addColorStop(1, 'rgba(26, 14, 8, 0.26)');
  ctx.fillStyle = edgeGrad;
  ctx.fillRect(0, 0, w, h);

  const isLight = book.isCreator;
  const inkCol = isLight ? PALETTE.ink : 'rgba(251, 246, 234, 0.92)';
  const subCol = isLight ? 'rgba(90, 58, 40, 0.72)' : 'rgba(251, 246, 234, 0.72)';

  // Embossed spine bands
  ctx.strokeStyle = inkCol;
  ctx.lineWidth = 3;
  ctx.strokeRect(22, 26, w - 44, h - 52);

  // Spine vertical title
  ctx.save();
  ctx.translate(w / 2, h * 0.43);
  ctx.rotate(Math.PI / 2);
  ctx.fillStyle = inkCol;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = book.isCreator ? '600 28px Georgia, "Songti SC", serif' : 'bold 38px Georgia, "Songti SC", serif';
  ctx.fillText(book.spineTitle || book.regionEn || book.title, 0, 0);
  ctx.restore();

  // Bottom engraved ornament
  ctx.strokeStyle = subCol;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(46, h - 185);
  ctx.lineTo(w - 46, h - 185);
  ctx.stroke();

  ctx.save();
  ctx.translate(w / 2, h - 115);
  ctx.strokeStyle = inkCol;
  ctx.fillStyle = subCol;
  ctx.lineWidth = 2.5;
  if (book.isCreator) {
    ctx.beginPath();
    ctx.moveTo(-22, 0);
    ctx.lineTo(22, 0);
    ctx.moveTo(0, -22);
    ctx.lineTo(0, 22);
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, 32, 0, Math.PI * 2);
    ctx.stroke();
    ctx.font = 'bold 20px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(book.volume || '01', 0, 1);
  }
  ctx.restore();

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function createBookCoverTexture(book) {
  const w = 512;
  const h = 720;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  ctx.fillStyle = book.coverColor;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = 'rgba(255, 248, 232, 0.06)';
  for (let y = 0; y < h; y += 6) ctx.fillRect(0, y, w, 2);

  const grad = ctx.createLinearGradient(0, 0, 48, 0);
  grad.addColorStop(0, 'rgba(30, 16, 8, 0.34)');
  grad.addColorStop(1, 'rgba(30, 16, 8, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 48, h);

  const borderCol = book.isCreator ? PALETTE.ink : PALETTE.cutEdge;
  ctx.strokeStyle = borderCol;
  ctx.lineWidth = 5;
  ctx.strokeRect(42, 34, w - 72, h - 68);
  ctx.lineWidth = 1.6;
  ctx.strokeRect(54, 46, w - 96, h - 92);

  ctx.fillStyle = borderCol;
  ctx.textAlign = 'center';
  ctx.font = 'bold 20px Georgia, serif';
  ctx.fillText((book.regionEn || 'Custom').toUpperCase(), w / 2 + 6, 106);

  ctx.font = 'bold 44px Georgia, "Songti SC", serif';
  ctx.fillText(book.title, w / 2 + 6, 174);

  ctx.font = 'italic 21px Georgia, serif';
  ctx.fillText(book.subtitle || '', w / 2 + 6, 214);

  const cx = w / 2 + 6;
  const cy = 415;
  ctx.fillStyle = PALETTE.paper;
  ctx.beginPath();
  ctx.arc(cx, cy, 120, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = PALETTE.ink;
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.save();
  ctx.translate(cx, cy);
  if (book.id === 'east-asia') {
    ctx.fillStyle = PALETTE.rose;
    ctx.beginPath();
    ctx.arc(0, -18, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PALETTE.terracotta;
    ctx.fillRect(-50, -4, 100, 12);
    ctx.fillRect(-38, 14, 76, 9);
    ctx.fillRect(-30, 8, 12, 56);
    ctx.fillRect(18, 8, 12, 56);
    ctx.fillStyle = PALETTE.pine;
    ctx.fillRect(-72, 56, 144, 14);
  } else if (book.id === 'europe') {
    ctx.fillStyle = PALETTE.ochre;
    ctx.beginPath();
    ctx.arc(0, -26, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PALETTE.paperShade;
    ctx.fillRect(-68, 12, 136, 20);
    ctx.fillStyle = PALETTE.teal;
    ctx.fillRect(-74, 34, 148, 28);
  } else if (book.id === 'wild-earth') {
    ctx.fillStyle = PALETTE.cutEdge;
    ctx.beginPath();
    ctx.moveTo(-68, 30);
    ctx.lineTo(-14, -48);
    ctx.lineTo(36, 30);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = PALETTE.pine;
    ctx.beginPath();
    ctx.moveTo(-6, 30);
    ctx.lineTo(42, -32);
    ctx.lineTo(74, 30);
    ctx.closePath();
    ctx.fill();
  } else {
    ctx.fillStyle = PALETTE.teal;
    ctx.beginPath();
    ctx.arc(0, 0, 76, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = PALETTE.cutEdge;
    ctx.fillRect(-32, -4, 64, 46);
    ctx.fillStyle = PALETTE.terracotta;
    ctx.beginPath();
    ctx.moveTo(-42, -4);
    ctx.lineTo(0, -38);
    ctx.lineTo(42, -4);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  ctx.fillStyle = borderCol;
  ctx.font = '600 18px Georgia, serif';
  ctx.fillText(`VOL. ${book.volume || '★'} · ${(book.scenes || []).length} SCENES`, w / 2 + 6, h - 76);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function createWallArtTexture(scene, side /* 'left' | 'right' */) {
  const w = 512;
  const h = 512;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  // Warm ivory cardstock matching ui_02_origami_book_flip.png
  ctx.fillStyle = '#f5ebd8';
  ctx.fillRect(0, 0, w, h);

  const nightLike = scene.wallTheme === 'night' || scene.wallTheme === 'aurora' || scene.wallTheme === 'balcony';
  const inkStroke = PALETTE.indigoInk;
  const pad = 34;
  const pw = w - pad * 2;
  const ph = h - pad * 2;

  ctx.save();
  ctx.beginPath();
  ctx.rect(pad, pad, pw, ph);
  ctx.clip();

  if (nightLike) {
    const sky = ctx.createLinearGradient(0, pad, 0, h - pad);
    sky.addColorStop(0, '#36416b');
    sky.addColorStop(0.7, '#586796');
    sky.addColorStop(1, '#a99d95');
    ctx.fillStyle = sky;
    ctx.fillRect(pad, pad, pw, ph);

    ctx.fillStyle = '#fff5cf';
    for (let i = 0; i < 20; i++) {
      const sx = pad + ((i * 73 + (side === 'right' ? 40 : 12)) % pw);
      const sy = pad + ((i * 47 + 25) % (ph * 0.55));
      ctx.beginPath();
      ctx.arc(sx, sy, (i % 2) + 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
    if (side === 'right') {
      ctx.fillStyle = '#ffe28a';
      ctx.beginPath();
      ctx.arc(370, 126, 26, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (scene.wallTheme === 'indoor') {
    ctx.fillStyle = '#f6ecd8';
    ctx.fillRect(pad, pad, pw, ph);
    ctx.fillStyle = '#ead8b8';
    ctx.fillRect(pad, h - 148, pw, 114);
    ctx.strokeStyle = inkStroke;
    ctx.lineWidth = 2;
    ctx.strokeRect(pad, h - 148, pw, 2);

    if (side === 'left') {
      ctx.fillStyle = '#cfe0ea';
      ctx.fillRect(110, 96, 220, 190);
      ctx.strokeRect(110, 96, 220, 190);
      ctx.fillStyle = PALETTE.rose;
      ctx.fillRect(88, 86, 46, 215);
      ctx.fillRect(308, 86, 46, 215);
    } else {
      ctx.fillStyle = '#d4ac79';
      ctx.fillRect(96, 92, 290, 175);
      ctx.strokeRect(96, 92, 290, 175);
      ctx.fillStyle = PALETTE.cutEdge;
      ctx.fillRect(118, 112, 74, 62);
      ctx.fillRect(212, 124, 86, 68);
      ctx.fillRect(310, 110, 56, 78);
    }
  } else {
    // Clean warm ivory watercolor wash so 3D cut-out props pop cleanly like ui_02!
    const sky = ctx.createLinearGradient(0, pad, 0, h - pad);
    sky.addColorStop(0, scene.wallTheme === 'desert' ? '#f8e6c6' : '#f4ecd9');
    sky.addColorStop(1, '#f8f0df');
    ctx.fillStyle = sky;
    ctx.fillRect(pad, pad, pw, ph);

    // Subtle soft sun / cloud silhouette
    if (side === 'left') {
      ctx.fillStyle = scene.wallTheme === 'sakura' ? 'rgba(222, 148, 134, 0.45)' : 'rgba(232, 190, 110, 0.38)';
      ctx.beginPath();
      ctx.arc(138, 135, 34, 0, Math.PI * 2);
      ctx.fill();
    }

    // Soft distant horizon wash
    ctx.fillStyle = 'rgba(218, 198, 166, 0.28)';
    ctx.beginPath();
    ctx.moveTo(pad, h - pad);
    ctx.lineTo(pad, h - 120);
    ctx.quadraticCurveTo(180, h - 175, 320, h - 125);
    ctx.lineTo(w - pad, h - 145);
    ctx.lineTo(w - pad, h - pad);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  // Crisp double-line origami border matching ui_02
  ctx.strokeStyle = inkStroke;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(14, 14, w - 28, h - 28);
  ctx.lineWidth = 1.8;
  ctx.strokeRect(pad, pad, pw, ph);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function createFloorArtTexture(scene, isWorld = false) {
  const w = 512;
  const h = 512;
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d');

  ctx.fillStyle = scene.floorColor || '#f1e4cb';
  ctx.fillRect(0, 0, w, h);

  // Subtle hand-inked texture lines
  ctx.strokeStyle = 'rgba(90, 58, 40, 0.1)';
  ctx.lineWidth = 2;

  if (scene.wallTheme === 'indoor') {
    for (let y = 32; y < h; y += 44) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.fillStyle = PALETTE.rose;
    ctx.fillRect(160, 160, 192, 192);
    ctx.strokeStyle = PALETTE.cutEdge;
    ctx.lineWidth = 5;
    ctx.strokeRect(172, 172, 168, 168);
  } else if (scene.hasCanal) {
    // Central teal canal water band (for Stage 2 V-fold floor & Stage 3 canal bed)
    ctx.fillStyle = PALETTE.teal;
    ctx.fillRect(175, 0, 162, h);
    ctx.strokeStyle = 'rgba(251, 246, 234, 0.48)';
    ctx.lineWidth = 2.5;
    for (let y = 36; y < h; y += 52) {
      ctx.beginPath();
      ctx.moveTo(205, y);
      ctx.quadraticCurveTo(256, y + 10, 307, y);
      ctx.stroke();
    }
  } else if (isWorld) {
    // Winding cream path on the open book page
    ctx.fillStyle = '#f6ebd5';
    ctx.beginPath();
    ctx.moveTo(210, 0);
    ctx.bezierCurveTo(275, 165, 160, 330, 240, h);
    ctx.lineTo(318, h);
    ctx.bezierCurveTo(235, 330, 345, 165, 290, 0);
    ctx.closePath();
    ctx.fill();
  }

  // Double hairline border
  ctx.strokeStyle = isWorld ? 'rgba(47, 59, 110, 0.36)' : PALETTE.indigoInk;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(8, 8, w - 16, h - 16);
  ctx.lineWidth = 1.6;
  ctx.strokeRect(18, 18, w - 36, h - 36);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

// Handcrafted scene preview thumbnail for Polaroid frame before user uploads own photo
export function createScenePolaroidFallback(scene) {
  const s = 240;
  const c = document.createElement('canvas');
  c.width = s;
  c.height = s;
  const ctx = c.getContext('2d');

  const night = scene.defaultNight || scene.wallTheme === 'night' || scene.wallTheme === 'aurora';
  const grad = ctx.createLinearGradient(0, 0, 0, s);
  grad.addColorStop(0, night ? '#273156' : '#f3dfc1');
  grad.addColorStop(1, night ? '#463946' : '#e4c79c');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, s, s);

  // Paper mountains silhouette
  ctx.fillStyle = night ? '#1f1b2b' : '#b9a37e';
  ctx.beginPath();
  ctx.moveTo(0, s);
  ctx.lineTo(0, 145);
  ctx.lineTo(65, 92);
  ctx.lineTo(135, 138);
  ctx.lineTo(195, 82);
  ctx.lineTo(s, 132);
  ctx.lineTo(s, s);
  ctx.closePath();
  ctx.fill();

  // Foreground cottage or canal silhouette
  ctx.fillStyle = scene.hasCanal ? PALETTE.teal : night ? '#3c2a1f' : PALETTE.terracotta;
  ctx.fillRect(0, 170, s, 70);

  // Lit house silhouette
  ctx.fillStyle = night ? '#3a271c' : PALETTE.paper;
  ctx.fillRect(88, 128, 64, 46);
  ctx.fillStyle = PALETTE.terracotta;
  ctx.beginPath();
  ctx.moveTo(78, 128);
  ctx.lineTo(120, 96);
  ctx.lineTo(162, 128);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = night ? PALETTE.lantern : PALETTE.ink;
  ctx.fillRect(102, 142, 14, 14);
  ctx.fillRect(126, 142, 14, 14);

  if (night) {
    ctx.fillStyle = '#ffd76a';
    for (const [fx, fy] of [[42, 70], [72, 110], [186, 62], [202, 128], [148, 86]]) {
      ctx.beginPath();
      ctx.arc(fx, fy, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  return c.toDataURL('image/jpeg', 0.88);
}
