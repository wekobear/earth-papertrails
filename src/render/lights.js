import * as THREE from 'three';
import { STAGE_PRESETS } from '../core/palette.js';

export function createLights({ scene, glowMaterials }) {
  const key = new THREE.DirectionalLight('#ffd49e', 2.6);
  key.castShadow = true;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shadowSize = isMobile ? 1024 : 2048;
  key.shadow.mapSize.set(shadowSize, shadowSize);
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.018;
  key.shadow.radius = 2.6;

  const fill = new THREE.DirectionalLight('#f3cfa6', 0.95);
  const hemi = new THREE.HemisphereLight('#ffe9cc', '#b98858', 0.55);
  const accent = new THREE.PointLight('#ffc45a', 1.0, 15, 1.25);

  scene.add(key, key.target, fill, fill.target, hemi, accent);
  scene.background = new THREE.Color('#ece3d4');
  scene.fog = new THREE.Fog('#ece3d4', 36, 85);

  let mode = 'bookshelf';
  let nightTarget = 0;
  let nightMix = 0;
  let currentExposure = 0.9;

  const cA = new THREE.Color();
  const cB = new THREE.Color();

  function configureShadowBounds(nextMode) {
    const cam = key.shadow.camera;
    if (nextMode === 'bookshelf') {
      key.position.set(-7.5, 9.2, 10.5);
      key.target.position.set(0, 1.75, 0);
      fill.position.set(7.5, 4, 8);
      fill.target.position.set(0, 1.75, 0);
      cam.left = -8.5;
      cam.right = 8.5;
      cam.top = 6.5;
      cam.bottom = -4.5;
      cam.near = 1;
      cam.far = 38;
      scene.fog.near = 36;
      scene.fog.far = 85;
    } else if (nextMode === 'book') {
      key.position.set(-7.0, 10.5, 6.8);
      key.target.position.set(0, 1.0, 0.2);
      fill.position.set(8, 5, 4);
      fill.target.position.set(0, 1.0, 0.2);
      cam.left = -6.0;
      cam.right = 6.0;
      cam.top = 5.8;
      cam.bottom = -4.5;
      cam.near = 1;
      cam.far = 34;
      scene.fog.near = 36;
      scene.fog.far = 85;
    } else {
      key.position.set(-10.5, 14, 7.8);
      key.target.position.set(0, 0.5, 0);
      fill.position.set(11, 6, -4);
      fill.target.position.set(0, 0.5, 0);
      cam.left = -12;
      cam.right = 12;
      cam.top = 12;
      cam.bottom = -12;
      cam.near = 1;
      cam.far = 42;
      scene.fog.near = 36;
      scene.fog.far = 85;
    }
    cam.updateProjectionMatrix();
    key.target.updateMatrixWorld();
    fill.target.updateMatrixWorld();
  }

  configureShadowBounds(mode);

  return {
    key,
    fill,
    hemi,
    accent,
    get isNight() {
      return nightTarget === 1;
    },
    get nightMix() {
      return nightMix * nightMix * (3 - 2 * nightMix);
    },
    get exposure() {
      return currentExposure;
    },
    setMode(nextMode) {
      mode = nextMode;
      configureShadowBounds(nextMode);
    },
    setNight(flag, snap = false) {
      nightTarget = flag ? 1 : 0;
      if (snap) nightMix = nightTarget;
    },
    toggleNight() {
      nightTarget = nightTarget ? 0 : 1;
      return nightTarget === 1;
    },
    setAccentPosition(x, y, z) {
      accent.position.set(x, y, z);
    },
    update(dt) {
      const speed = 1 / 1.05;
      if (nightMix < nightTarget) nightMix = Math.min(1, nightMix + dt * speed);
      else if (nightMix > nightTarget) nightMix = Math.max(0, nightMix - dt * speed);

      const t = nightMix * nightMix * (3 - 2 * nightMix);
      const preset = STAGE_PRESETS[mode] || STAGE_PRESETS.book;
      const d = preset.day;
      const n = preset.night;

      cA.set(d.background);
      cB.set(n.background);
      scene.background.copy(cA).lerp(cB, t);

      cA.set(d.fogColor);
      cB.set(n.fogColor);
      scene.fog.color.copy(cA).lerp(cB, t);

      cA.set(d.keyColor);
      cB.set(n.keyColor);
      key.color.copy(cA).lerp(cB, t);
      key.intensity = d.keyIntensity + (n.keyIntensity - d.keyIntensity) * t;

      cA.set(d.fillColor);
      cB.set(n.fillColor);
      fill.color.copy(cA).lerp(cB, t);
      fill.intensity = d.fillIntensity + (n.fillIntensity - d.fillIntensity) * t;

      cA.set(d.hemiSky);
      cB.set(n.hemiSky);
      hemi.color.copy(cA).lerp(cB, t);

      cA.set(d.hemiGround);
      cB.set(n.hemiGround);
      hemi.groundColor.copy(cA).lerp(cB, t);
      hemi.intensity = d.hemiIntensity + (n.hemiIntensity - d.hemiIntensity) * t;

      cA.set(d.accentColor);
      cB.set(n.accentColor);
      accent.color.copy(cA).lerp(cB, t);
      accent.intensity = d.accentIntensity + (n.accentIntensity - d.accentIntensity) * t;

      currentExposure = d.exposure + (n.exposure - d.exposure) * t;

      const glowScale = d.glowIntensity + (n.glowIntensity - d.glowIntensity) * t;
      for (const m of glowMaterials) {
        const base = m.userData.baseEmissiveIntensity ?? 1;
        m.emissiveIntensity = base * glowScale;
      }
    },
  };
}
