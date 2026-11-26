import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';
import { addCutEdgeLines } from '../render/paperMaterial.js';

function createPart(geo, mat, { pos = [0, 0, 0], rot = [0, 0, 0], castShadow = true, edge = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(pos[0], pos[1], pos[2]);
  m.rotation.set(rot[0], rot[1], rot[2]);
  m.castShadow = castShadow;
  m.receiveShadow = true;
  if (edge) addCutEdgeLines(m, PALETTE.ink, 0.34, 24);
  return m;
}

// Die-cut layered cardstock helper: front/back face material + crisp pale-cream cut-edge core (#fbf6ea)
function createCutoutMesh(shape, depth, faceMat, cutEdgeMat, { pos = [0, 0, 0], rot = [0, 0, 0], castShadow = true } = {}) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelSize: 0.007,
    bevelThickness: 0.007,
    bevelSegments: 1,
    curveSegments: 10,
  });
  geo.translate(0, 0, -depth / 2);
  const mesh = new THREE.Mesh(geo, [faceMat, cutEdgeMat]);
  mesh.position.set(pos[0], pos[1], pos[2]);
  mesh.rotation.set(rot[0], rot[1], rot[2]);
  mesh.castShadow = castShadow;
  mesh.receiveShadow = true;
  return mesh;
}

function makeScallopedCrownShape(radius = 0.42, lobes = 7) {
  const s = new THREE.Shape();
  for (let i = 0; i <= lobes * 4; i++) {
    const t = (i / (lobes * 4)) * Math.PI * 2;
    const r = radius * (0.86 + 0.16 * Math.abs(Math.sin(t * lobes * 0.5)));
    const x = Math.cos(t) * r;
    const y = Math.sin(t) * r * 1.08;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

function makePineLayerShape(width = 0.65, height = 0.95) {
  const s = new THREE.Shape();
  s.moveTo(0, height);
  s.lineTo(-width * 0.28, height * 0.58);
  s.lineTo(-width * 0.15, height * 0.58);
  s.lineTo(-width * 0.42, height * 0.28);
  s.lineTo(-width * 0.22, height * 0.28);
  s.lineTo(-width * 0.5, 0);
  s.lineTo(width * 0.5, 0);
  s.lineTo(width * 0.22, height * 0.28);
  s.lineTo(width * 0.42, height * 0.28);
  s.lineTo(width * 0.15, height * 0.58);
  s.lineTo(width * 0.28, height * 0.58);
  s.closePath();
  return s;
}

function makeArchBridgeShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.85, 0);
  s.lineTo(-0.85, 0.22);
  s.lineTo(-0.56, 0.34);
  s.lineTo(-0.34, 0.46);
  s.lineTo(-0.14, 0.52);
  s.lineTo(0.14, 0.52);
  s.lineTo(0.34, 0.46);
  s.lineTo(0.56, 0.34);
  s.lineTo(0.85, 0.22);
  s.lineTo(0.85, 0);
  s.lineTo(0.42, 0);
  s.absarc(0, 0, 0.42, 0, Math.PI, false);
  s.lineTo(-0.85, 0);
  s.closePath();
  return s;
}

function makeArchParapetShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.85, 0.22);
  s.lineTo(-0.85, 0.36);
  s.quadraticCurveTo(0, 0.78, 0.85, 0.36);
  s.lineTo(0.85, 0.22);
  s.quadraticCurveTo(0, 0.62, -0.85, 0.22);
  s.closePath();
  return s;
}

function makeGableHouseShape(w = 1.0, wallH = 0.72, peakH = 1.15) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2, 0);
  s.lineTo(-w / 2, wallH);
  s.lineTo(0, peakH);
  s.lineTo(w / 2, wallH);
  s.lineTo(w / 2, 0);
  s.closePath();
  return s;
}

function makeBoatHullShape() {
  const s = new THREE.Shape();
  s.moveTo(-0.62, 0.14);
  s.quadraticCurveTo(-0.32, 0.0, 0, 0.0);
  s.quadraticCurveTo(0.32, 0.0, 0.65, 0.18);
  s.lineTo(0.52, 0.25);
  s.quadraticCurveTo(0.22, 0.12, 0, 0.12);
  s.quadraticCurveTo(-0.22, 0.12, -0.5, 0.21);
  s.closePath();
  return s;
}

function makeKarstShape(w = 1.1, h = 1.55) {
  const s = new THREE.Shape();
  s.moveTo(-w * 0.5, 0);
  s.quadraticCurveTo(-w * 0.38, h * 0.78, -w * 0.14, h * 0.96);
  s.quadraticCurveTo(-w * 0.02, h, w * 0.1, h * 0.82);
  s.quadraticCurveTo(w * 0.28, h * 0.5, w * 0.5, 0);
  s.closePath();
  return s;
}

export function buildPaperProp(type, materials, { scale = 1, rot = 0, x = 0, z = 0 } = {}) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  root.scale.setScalar(scale);

  const hinge = new THREE.Group();
  root.add(hinge);

  const P = (color, opts = {}) => materials.paper({ color, ...opts });
  const cutEdgeMat = P(PALETTE.cutEdge, { vary: false });
  const animated = {};
  const lightPoolOffsets = [];
  let colliderRadius = 0.42 * scale;
  let swayWeight = 0.06;

  function addWindowGrid(parent, px, py, pz, ry = 0) {
    const frame = P(PALETTE.ink);
    const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.95, glowTag: true });
    const g = new THREE.Group();
    g.position.set(px, py, pz);
    g.rotation.y = ry;
    g.add(
      createPart(new THREE.BoxGeometry(0.24, 0.26, 0.02), frame, { edge: false }),
      createPart(new THREE.PlaneGeometry(0.18, 0.2), glow, { pos: [0, 0, 0.013], edge: false }),
      createPart(new THREE.BoxGeometry(0.2, 0.02, 0.028), frame, { pos: [0, 0, 0.008], edge: false }),
      createPart(new THREE.BoxGeometry(0.02, 0.22, 0.028), frame, { pos: [0, 0, 0.008], edge: false }),
    );
    parent.add(g);
  }

  switch (type) {
    case 'torii': {
      const red = P(PALETTE.terracotta);
      const dark = P(PALETTE.umber);
      // Curved kasagi top lintel via ExtrudeGeometry
      const lintelShape = new THREE.Shape();
      lintelShape.moveTo(-0.74, 1.06);
      lintelShape.quadraticCurveTo(0, 0.98, 0.74, 1.06);
      lintelShape.lineTo(0.78, 1.16);
      lintelShape.quadraticCurveTo(0, 1.06, -0.78, 1.16);
      lintelShape.closePath();

      hinge.add(
        createPart(new THREE.BoxGeometry(0.11, 1.06, 0.11), red, { pos: [-0.4, 0.53, 0] }),
        createPart(new THREE.BoxGeometry(0.11, 1.06, 0.11), red, { pos: [0.4, 0.53, 0] }),
        createPart(new THREE.BoxGeometry(0.16, 0.16, 0.16), dark, { pos: [-0.4, 0.08, 0] }),
        createPart(new THREE.BoxGeometry(0.16, 0.16, 0.16), dark, { pos: [0.4, 0.08, 0] }),
        createCutoutMesh(lintelShape, 0.15, red, cutEdgeMat),
        createPart(new THREE.BoxGeometry(1.06, 0.09, 0.09), red, { pos: [0, 0.84, 0] }),
        createPart(new THREE.BoxGeometry(0.08, 0.2, 0.08), red, { pos: [0, 0.94, 0] }),
      );
      colliderRadius = 0.16 * scale;
      break;
    }

    case 'pagoda':
    case 'daliPagoda': {
      const cream = P(PALETTE.paper);
      const roofCol = type === 'daliPagoda' ? PALETTE.paperShade : PALETTE.terracotta;
      const roof = P(roofCol);
      const dark = P(PALETTE.ink);
      const tiers = type === 'daliPagoda' ? 5 : 4;
      hinge.add(createPart(new THREE.BoxGeometry(0.84, 0.12, 0.84), P(PALETTE.kraft), { pos: [0, 0.06, 0] }));
      for (let tier = 0; tier < tiers; tier++) {
        const w = 0.68 - tier * 0.09;
        const y = 0.28 + tier * 0.4;
        hinge.add(createPart(new THREE.BoxGeometry(w * 0.7, 0.3, w * 0.7), cream, { pos: [0, y, 0] }));
        hinge.add(createPart(new THREE.ConeGeometry(w * 0.78, 0.22, 4), roof, { pos: [0, y + 0.24, 0], rot: [0, Math.PI / 4, 0] }));
      }
      hinge.add(createPart(new THREE.CylinderGeometry(0.02, 0.035, 0.34, 6), dark, { pos: [0, 0.32 + tiers * 0.4, 0] }));
      colliderRadius = 0.52 * scale;
      break;
    }

    case 'palazzo':
    case 'chalet':
    case 'machiya': {
      const wallColor = type === 'palazzo' ? PALETTE.rose : type === 'chalet' ? PALETTE.ochre : PALETTE.kraft;
      const roofColor = type === 'palazzo' ? '#9e5446' : type === 'chalet' ? PALETTE.terracotta : PALETTE.ink;
      const wallMat = P(wallColor);
      const roofMat = P(roofColor);
      const gable = createCutoutMesh(makeGableHouseShape(1.06, 0.78, 1.24), 0.92, wallMat, cutEdgeMat);
      hinge.add(gable);

      // Overhanging cut-paper roof slabs on both slopes
      hinge.add(
        createPart(new THREE.BoxGeometry(0.74, 0.045, 1.04), roofMat, { pos: [-0.3, 1.03, 0], rot: [0, 0, 0.7] }),
        createPart(new THREE.BoxGeometry(0.74, 0.045, 1.04), roofMat, { pos: [0.3, 1.03, 0], rot: [0, 0, -0.7] }),
        // Door on front face
        createPart(new THREE.BoxGeometry(0.22, 0.36, 0.03), P(PALETTE.paperShade), { pos: [0, 0.19, 0.46] }),
      );
      addWindowGrid(hinge, -0.26, 0.52, 0.465, 0);
      addWindowGrid(hinge, 0.26, 0.52, 0.465, 0);
      addWindowGrid(hinge, 0.535, 0.52, 0.16, Math.PI / 2);
      addWindowGrid(hinge, -0.535, 0.52, -0.16, -Math.PI / 2);
      if (type === 'chalet') {
        hinge.add(createPart(new THREE.BoxGeometry(0.16, 0.34, 0.16), P(PALETTE.paperShade), { pos: [0.22, 1.14, -0.18] }));
      }
      lightPoolOffsets.push([0, 0.35, 0.65, 0.6]);
      colliderRadius = 0.68 * scale;
      break;
    }

    case 'teaHouse': {
      const wall = P(PALETTE.paper);
      const wood = P(PALETTE.ink);
      const roof = P(PALETTE.pine);
      const shoji = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.75, glowTag: true });
      hinge.add(
        createPart(new THREE.BoxGeometry(1.18, 0.14, 0.98), wood, { pos: [0, 0.07, 0] }),
        createPart(new THREE.BoxGeometry(1.02, 0.68, 0.84), wall, { pos: [0, 0.48, 0] }),
        createPart(new THREE.PlaneGeometry(0.56, 0.44), shoji, { pos: [0, 0.46, 0.425], edge: false }),
        createPart(new THREE.ConeGeometry(0.95, 0.44, 4), roof, { pos: [0, 1.02, 0], rot: [0, Math.PI / 4, 0] }),
      );
      lightPoolOffsets.push([0, 0.35, 0.6, 0.55]);
      colliderRadius = 0.72 * scale;
      break;
    }

    case 'veniceBridge': {
      const stoneMat = P(PALETTE.paper);
      const stepMat = P(PALETTE.kraft);
      // Curved semi-circular arch bridge with cream die-cut edges + parapets
      hinge.add(
        createCutoutMesh(makeArchBridgeShape(), 0.66, stoneMat, cutEdgeMat),
        createCutoutMesh(makeArchParapetShape(), 0.05, stepMat, cutEdgeMat, { pos: [0, 0, 0.31] }),
        createCutoutMesh(makeArchParapetShape(), 0.05, stepMat, cutEdgeMat, { pos: [0, 0, -0.31] }),
      );
      // Stepped stair treads on the arch
      for (const sx of [-0.66, -0.46, -0.24, 0, 0.24, 0.46, 0.66]) {
        const sy = 0.52 - Math.abs(sx) * 0.36;
        hinge.add(createPart(new THREE.BoxGeometry(0.18, 0.04, 0.58), stepMat, { pos: [sx, sy, 0] }));
      }
      colliderRadius = 0.2 * scale;
      break;
    }

    case 'windmill': {
      const body = P(PALETTE.terracotta);
      const trim = P(PALETTE.cutEdge);
      const roof = P(PALETTE.pine);
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.28, 0.46, 1.38, 6), body, { pos: [0, 0.69, 0] }),
        createPart(new THREE.ConeGeometry(0.38, 0.42, 6), roof, { pos: [0, 1.56, 0] }),
      );
      const sailHub = new THREE.Group();
      sailHub.position.set(0, 1.24, 0.36);
      for (let i = 0; i < 4; i++) {
        const arm = new THREE.Group();
        arm.rotation.z = (i * Math.PI) / 2 + 0.35;
        arm.add(
          createPart(new THREE.BoxGeometry(0.05, 0.82, 0.03), P(PALETTE.ink), { pos: [0, 0.41, 0] }),
          createPart(new THREE.BoxGeometry(0.22, 0.62, 0.018), trim, { pos: [0.11, 0.48, 0.01] }),
        );
        sailHub.add(arm);
      }
      hinge.add(sailHub);
      animated.windmillHub = sailHub;
      colliderRadius = 0.55 * scale;
      break;
    }

    case 'bellTower': {
      const brick = P(PALETTE.terracotta);
      const cap = P(PALETTE.cutEdge);
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.9, glowTag: true });
      hinge.add(
        createPart(new THREE.BoxGeometry(0.56, 1.65, 0.56), brick, { pos: [0, 0.825, 0] }),
        createPart(new THREE.BoxGeometry(0.46, 0.32, 0.46), cap, { pos: [0, 1.78, 0] }),
        createPart(new THREE.ConeGeometry(0.42, 0.55, 4), P(PALETTE.ink), { pos: [0, 2.2, 0], rot: [0, Math.PI / 4, 0] }),
        createPart(new THREE.PlaneGeometry(0.18, 0.24), glow, { pos: [0, 1.78, 0.235], edge: false }),
      );
      colliderRadius = 0.45 * scale;
      break;
    }

    case 'lighthouse': {
      const white = P(PALETTE.cutEdge);
      const red = P(PALETTE.terracotta);
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 1.15, glowTag: true });
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.32, 0.4, 0.42, 8), white, { pos: [0, 0.21, 0] }),
        createPart(new THREE.CylinderGeometry(0.26, 0.32, 0.42, 8), red, { pos: [0, 0.63, 0] }),
        createPart(new THREE.CylinderGeometry(0.21, 0.26, 0.42, 8), white, { pos: [0, 1.05, 0] }),
        createPart(new THREE.CylinderGeometry(0.22, 0.22, 0.24, 8), glow, { pos: [0, 1.38, 0] }),
        createPart(new THREE.ConeGeometry(0.28, 0.26, 8), red, { pos: [0, 1.62, 0] }),
      );
      const beam = new THREE.Group();
      beam.position.set(0, 1.38, 0);
      beam.add(
        createPart(
          new THREE.ConeGeometry(0.45, 2.1, 10, 1, true),
          materials.paper({
            color: PALETTE.lantern,
            emissive: PALETTE.lantern,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.24,
            depthWrite: false,
            glowTag: true,
          }),
          { pos: [1.05, 0, 0], rot: [0, 0, Math.PI / 2], castShadow: false, edge: false },
        ),
      );
      hinge.add(beam);
      animated.beacon = beam;
      lightPoolOffsets.push([0, 0.3, 0, 0.75]);
      colliderRadius = 0.48 * scale;
      break;
    }

    case 'observatory': {
      const base = P(PALETTE.paper);
      const dome = P(PALETTE.teal);
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.9, glowTag: true });
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.56, 0.62, 0.64, 10), base, { pos: [0, 0.32, 0] }),
        createPart(new THREE.SphereGeometry(0.54, 10, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), dome, { pos: [0, 0.64, 0] }),
        createPart(new THREE.BoxGeometry(0.18, 0.18, 0.45), P(PALETTE.ink), { pos: [0, 0.94, 0.42], rot: [-0.35, 0, 0] }),
        createPart(new THREE.PlaneGeometry(0.22, 0.22), glow, { pos: [0, 0.32, 0.6], edge: false }),
      );
      colliderRadius = 0.66 * scale;
      break;
    }

    case 'tent': {
      hinge.add(
        createPart(new THREE.ConeGeometry(0.75, 0.85, 5), P(PALETTE.ochre), { pos: [0, 0.425, 0] }),
        createPart(new THREE.ConeGeometry(0.52, 0.52, 5), P(PALETTE.terracotta), { pos: [0, 0.58, 0] }),
      );
      colliderRadius = 0.68 * scale;
      break;
    }

    case 'campfire': {
      const log = P(PALETTE.ink);
      const flameMat = P(PALETTE.lantern, { emissive: PALETTE.terracotta, emissiveIntensity: 1.3, glowTag: true });
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.05, 0.05, 0.62, 6), log, { pos: [0, 0.05, 0], rot: [0, 0.4, Math.PI / 2] }),
        createPart(new THREE.CylinderGeometry(0.05, 0.05, 0.62, 6), log, { pos: [0, 0.05, 0], rot: [0, -0.6, Math.PI / 2] }),
      );
      const flameGroup = new THREE.Group();
      flameGroup.add(
        createPart(new THREE.ConeGeometry(0.16, 0.42, 4), flameMat, { pos: [0, 0.24, 0], castShadow: false }),
        createPart(new THREE.ConeGeometry(0.11, 0.3, 4), P(PALETTE.terracotta, { emissive: PALETTE.lantern, emissiveIntensity: 0.95, glowTag: true }), { pos: [0.06, 0.18, 0.05], rot: [0, 0.5, -0.15], castShadow: false }),
      );
      hinge.add(flameGroup);
      animated.flame = flameGroup;
      lightPoolOffsets.push([0, 0.25, 0, 1.0]);
      colliderRadius = 0.36 * scale;
      break;
    }

    case 'tram': {
      const green = P(PALETTE.pine);
      const cream = P(PALETTE.cutEdge);
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.65, glowTag: true });
      hinge.add(
        createPart(new THREE.BoxGeometry(1.48, 0.08, 0.72), P(PALETTE.ink), { pos: [0, 0.04, 0] }),
        createPart(new THREE.BoxGeometry(1.22, 0.34, 0.52), green, { pos: [0, 0.25, 0] }),
        createPart(new THREE.BoxGeometry(1.2, 0.26, 0.5), cream, { pos: [0, 0.55, 0] }),
        createPart(new THREE.BoxGeometry(1.26, 0.08, 0.56), P(PALETTE.kraft), { pos: [0, 0.72, 0] }),
        createPart(new THREE.PlaneGeometry(0.24, 0.16), glow, { pos: [-0.32, 0.54, 0.255], edge: false }),
        createPart(new THREE.PlaneGeometry(0.24, 0.16), glow, { pos: [0.0, 0.54, 0.255], edge: false }),
        createPart(new THREE.PlaneGeometry(0.24, 0.16), glow, { pos: [0.32, 0.54, 0.255], edge: false }),
      );
      colliderRadius = 0.75 * scale;
      break;
    }

    case 'gondola':
    case 'sailboat': {
      const hullMat = P(type === 'gondola' ? PALETTE.ink : PALETTE.paper);
      const hull = createCutoutMesh(makeBoatHullShape(), 0.24, hullMat, cutEdgeMat);
      hinge.add(hull);
      if (type === 'sailboat') {
        const sailShape = new THREE.Shape();
        sailShape.moveTo(0, 0);
        sailShape.lineTo(0.46, 0);
        sailShape.lineTo(0, 0.78);
        sailShape.closePath();
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.02, 0.02, 1.05, 5), P(PALETTE.ink), { pos: [-0.04, 0.64, 0] }),
          createCutoutMesh(sailShape, 0.02, P(PALETTE.cutEdge), cutEdgeMat, { pos: [-0.02, 0.26, 0] }),
        );
        swayWeight = 0.45;
      } else {
        hinge.add(createPart(new THREE.BoxGeometry(0.24, 0.13, 0.18), P(PALETTE.terracotta), { pos: [-0.06, 0.18, 0] }));
      }
      animated.bob = hinge;
      colliderRadius = 0.42 * scale;
      break;
    }

    case 'pier': {
      const wood = P(PALETTE.kraft);
      const post = P(PALETTE.ink);
      hinge.add(createPart(new THREE.BoxGeometry(1.35, 0.08, 0.56), wood, { pos: [0, 0.18, 0] }));
      for (const px of [-0.55, 0, 0.55]) {
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 6), post, { pos: [px, 0.2, 0.24] }),
          createPart(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 6), post, { pos: [px, 0.2, -0.24] }),
        );
      }
      colliderRadius = 0.3 * scale;
      break;
    }

    case 'fountain': {
      const stone = P(PALETTE.paper);
      const water = P(PALETTE.teal);
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.68, 0.74, 0.22, 8), stone, { pos: [0, 0.11, 0] }),
        createPart(new THREE.CylinderGeometry(0.58, 0.58, 0.05, 8), water, { pos: [0, 0.21, 0] }),
        createPart(new THREE.CylinderGeometry(0.14, 0.2, 0.52, 8), stone, { pos: [0, 0.42, 0] }),
        createPart(new THREE.CylinderGeometry(0.32, 0.22, 0.12, 8), stone, { pos: [0, 0.64, 0] }),
      );
      colliderRadius = 0.74 * scale;
      break;
    }

    case 'sunroom': {
      const frame = P(PALETTE.cutEdge);
      const glass = P('#cfe6e4', { transparent: true, opacity: 0.45, depthWrite: false });
      hinge.add(
        createPart(new THREE.BoxGeometry(1.35, 0.22, 1.05), P(PALETTE.terracotta), { pos: [0, 0.11, 0] }),
        createPart(new THREE.BoxGeometry(1.28, 0.72, 0.98), glass, { pos: [0, 0.58, 0], castShadow: false }),
      );
      for (const rx of [-0.62, 0, 0.62]) {
        hinge.add(createPart(new THREE.BoxGeometry(0.06, 0.85, 1.02), frame, { pos: [rx, 0.6, 0] }));
      }
      hinge.add(createPart(new THREE.ConeGeometry(0.88, 0.44, 4), glass, { pos: [0, 1.16, 0], rot: [0, Math.PI / 4, 0], castShadow: false }));
      colliderRadius = 0.78 * scale;
      break;
    }

    case 'hotAirBalloon': {
      const dome = new THREE.Group();
      dome.position.set(0, 1.15, 0);
      dome.add(
        createPart(new THREE.CylinderGeometry(0.56, 0.26, 0.52, 8), P(PALETTE.terracotta), { pos: [0, -0.1, 0] }),
        createPart(new THREE.CylinderGeometry(0.52, 0.56, 0.38, 8), P(PALETTE.ochre), { pos: [0, 0.34, 0] }),
        createPart(new THREE.ConeGeometry(0.52, 0.36, 8), P(PALETTE.teal), { pos: [0, 0.7, 0] }),
      );
      hinge.add(
        createPart(new THREE.BoxGeometry(0.32, 0.24, 0.32), P(PALETTE.kraft), { pos: [0, 0.14, 0] }),
        createPart(new THREE.CylinderGeometry(0.015, 0.015, 0.72, 4), P(PALETTE.ink), { pos: [-0.14, 0.55, 0.14] }),
        createPart(new THREE.CylinderGeometry(0.015, 0.015, 0.72, 4), P(PALETTE.ink), { pos: [0.14, 0.55, 0.14] }),
        createPart(new THREE.CylinderGeometry(0.015, 0.015, 0.72, 4), P(PALETTE.ink), { pos: [-0.14, 0.55, -0.14] }),
        createPart(new THREE.CylinderGeometry(0.015, 0.015, 0.72, 4), P(PALETTE.ink), { pos: [0.14, 0.55, -0.14] }),
        dome,
      );
      animated.bob = dome;
      swayWeight = 0.25;
      colliderRadius = 0.45 * scale;
      break;
    }

    case 'bed': {
      hinge.add(
        createPart(new THREE.BoxGeometry(1.12, 0.18, 0.78), P(PALETTE.ink), { pos: [0, 0.12, 0] }),
        createPart(new THREE.BoxGeometry(1.04, 0.16, 0.72), P(PALETTE.cutEdge), { pos: [0, 0.26, 0] }),
        createPart(new THREE.BoxGeometry(0.68, 0.18, 0.74), P('#b7a3d4'), { pos: [0.18, 0.28, 0] }),
        createPart(new THREE.BoxGeometry(0.24, 0.12, 0.48), P(PALETTE.cutEdge), { pos: [-0.36, 0.38, 0] }),
        createPart(new THREE.BoxGeometry(0.08, 0.54, 0.78), P(PALETTE.kraft), { pos: [-0.54, 0.3, 0] }),
      );
      colliderRadius = 0.62 * scale;
      break;
    }

    case 'deskWithLamp': {
      const wood = P(PALETTE.kraft);
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 0.95, glowTag: true });
      hinge.add(
        createPart(new THREE.BoxGeometry(1.05, 0.07, 0.56), wood, { pos: [0, 0.52, 0] }),
        createPart(new THREE.BoxGeometry(0.07, 0.5, 0.48), P(PALETTE.ink), { pos: [-0.45, 0.25, 0] }),
        createPart(new THREE.BoxGeometry(0.07, 0.5, 0.48), P(PALETTE.ink), { pos: [0.45, 0.25, 0] }),
        createPart(new THREE.BoxGeometry(0.34, 0.03, 0.24), P(PALETTE.cutEdge), { pos: [-0.08, 0.57, 0.04] }),
        createPart(new THREE.BoxGeometry(0.34, 0.22, 0.03), P(PALETTE.paper), { pos: [-0.08, 0.68, -0.07], rot: [-0.15, 0, 0] }),
        createPart(new THREE.CylinderGeometry(0.02, 0.03, 0.26, 6), P(PALETTE.ink), { pos: [0.34, 0.68, -0.1] }),
        createPart(new THREE.ConeGeometry(0.13, 0.16, 8), glow, { pos: [0.32, 0.84, -0.06] }),
      );
      lightPoolOffsets.push([0.32, 0.45, 0, 0.85]);
      colliderRadius = 0.58 * scale;
      break;
    }

    case 'chair': {
      const wood = P(PALETTE.paper);
      hinge.add(
        createPart(new THREE.BoxGeometry(0.38, 0.05, 0.38), wood, { pos: [0, 0.32, 0] }),
        createPart(new THREE.BoxGeometry(0.38, 0.38, 0.05), wood, { pos: [0, 0.52, -0.16] }),
        createPart(new THREE.BoxGeometry(0.05, 0.32, 0.05), P(PALETTE.ink), { pos: [-0.15, 0.16, 0.15] }),
        createPart(new THREE.BoxGeometry(0.05, 0.32, 0.05), P(PALETTE.ink), { pos: [0.15, 0.16, 0.15] }),
        createPart(new THREE.BoxGeometry(0.05, 0.32, 0.05), P(PALETTE.ink), { pos: [-0.15, 0.16, -0.15] }),
        createPart(new THREE.BoxGeometry(0.05, 0.32, 0.05), P(PALETTE.ink), { pos: [0.15, 0.16, -0.15] }),
      );
      colliderRadius = 0.28 * scale;
      break;
    }

    case 'beanbag': {
      hinge.add(
        createPart(new THREE.DodecahedronGeometry(0.42, 0), P(PALETTE.ochre), { pos: [0, 0.3, 0] }),
        createPart(new THREE.BoxGeometry(0.26, 0.26, 0.14), P(PALETTE.rose), { pos: [0, 0.54, -0.14], rot: [0.3, 0.1, 0.1] }),
      );
      colliderRadius = 0.48 * scale;
      break;
    }

    case 'railing': {
      const white = P(PALETTE.cutEdge);
      hinge.add(createPart(new THREE.BoxGeometry(1.4, 0.06, 0.07), white, { pos: [0, 0.58, 0] }));
      for (let i = -3; i <= 3; i++) {
        hinge.add(createPart(new THREE.BoxGeometry(0.045, 0.58, 0.045), white, { pos: [i * 0.21, 0.29, 0] }));
      }
      colliderRadius = 0.16 * scale;
      break;
    }

    case 'pottedPlant': {
      hinge.add(createPart(new THREE.CylinderGeometry(0.18, 0.13, 0.24, 7), P(PALETTE.terracotta), { pos: [0, 0.12, 0] }));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        hinge.add(
          createPart(new THREE.BoxGeometry(0.12, 0.38, 0.02), P(i % 2 === 0 ? PALETTE.sage : PALETTE.pine), {
            pos: [Math.cos(a) * 0.1, 0.38, Math.sin(a) * 0.1],
            rot: [0.32 * Math.sin(a), a, 0.32 * Math.cos(a)],
          }),
        );
      }
      swayWeight = 0.65;
      colliderRadius = 0.25 * scale;
      break;
    }

    case 'telescope': {
      const brass = P(PALETTE.ochre);
      const wood = P(PALETTE.ink);
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.025, 0.025, 0.68, 5), wood, { pos: [-0.14, 0.32, 0.1], rot: [0.22, 0, -0.25] }),
        createPart(new THREE.CylinderGeometry(0.025, 0.025, 0.68, 5), wood, { pos: [0.14, 0.32, 0.1], rot: [0.22, 0, 0.25] }),
        createPart(new THREE.CylinderGeometry(0.025, 0.025, 0.68, 5), wood, { pos: [0, 0.32, -0.15], rot: [-0.28, 0, 0] }),
        createPart(new THREE.CylinderGeometry(0.07, 0.05, 0.65, 8), brass, { pos: [0, 0.72, 0.04], rot: [0, 0, 1.05] }),
      );
      colliderRadius = 0.3 * scale;
      break;
    }

    case 'sakuraTree': {
      const trunk = P(PALETTE.ink);
      const crownA = P(PALETTE.rose);
      const crownB = P('#dfa79c');
      hinge.add(createPart(new THREE.CylinderGeometry(0.055, 0.095, 0.56, 6), trunk, { pos: [0, 0.28, 0] }));
      const shape = makeScallopedCrownShape(0.42, 7);
      hinge.add(
        createCutoutMesh(shape, 0.032, crownA, cutEdgeMat, { pos: [0, 0.84, 0], rot: [0, 0.2, 0] }),
        createCutoutMesh(shape, 0.032, crownB, cutEdgeMat, { pos: [0, 0.84, 0], rot: [0, Math.PI / 2 + 0.2, 0] }),
      );
      swayWeight = 0.55;
      colliderRadius = 0.26 * scale;
      break;
    }

    case 'pineTree': {
      const trunk = P(PALETTE.ink);
      const leafA = P(PALETTE.pine);
      const leafB = P(PALETTE.sage);
      hinge.add(createPart(new THREE.CylinderGeometry(0.045, 0.08, 0.34, 6), trunk, { pos: [0, 0.17, 0] }));
      const shape = makePineLayerShape(0.72, 0.96);
      hinge.add(
        createCutoutMesh(shape, 0.028, leafA, cutEdgeMat, { pos: [0, 0.24, 0], rot: [0, 0.15, 0] }),
        createCutoutMesh(shape, 0.028, leafB, cutEdgeMat, { pos: [0, 0.24, 0], rot: [0, Math.PI / 2 + 0.15, 0] }),
      );
      swayWeight = 0.48;
      colliderRadius = 0.24 * scale;
      break;
    }

    case 'cypressTree': {
      const trunk = P(PALETTE.ink);
      const leaf = P(PALETTE.pine);
      hinge.add(createPart(new THREE.CylinderGeometry(0.04, 0.07, 0.34, 6), trunk, { pos: [0, 0.17, 0] }));
      const shape = makePineLayerShape(0.38, 1.32);
      hinge.add(
        createCutoutMesh(shape, 0.026, leaf, cutEdgeMat, { pos: [0, 0.22, 0], rot: [0, 0.1, 0] }),
        createCutoutMesh(shape, 0.026, leaf, cutEdgeMat, { pos: [0, 0.22, 0], rot: [0, Math.PI / 2 + 0.1, 0] }),
      );
      swayWeight = 0.55;
      colliderRadius = 0.22 * scale;
      break;
    }

    case 'palmTree': {
      hinge.add(createPart(new THREE.CylinderGeometry(0.05, 0.09, 1.05, 6), P(PALETTE.kraft), { pos: [0, 0.52, 0], rot: [0.08, 0, 0.08] }));
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        hinge.add(createPart(new THREE.BoxGeometry(0.46, 0.025, 0.14), P(PALETTE.sage), {
          pos: [Math.cos(a) * 0.24 + 0.04, 1.02, Math.sin(a) * 0.24],
          rot: [0.25 * Math.sin(a), -a, -0.35],
        }));
      }
      swayWeight = 0.8;
      colliderRadius = 0.22 * scale;
      break;
    }

    case 'bambooCluster': {
      for (let i = 0; i < 5; i++) {
        const bx = (i - 2) * 0.12;
        const bz = ((i % 2) - 0.5) * 0.16;
        const h = 1.05 + (i % 3) * 0.28;
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.032, 0.038, h, 5), P(i % 2 === 0 ? PALETTE.sage : PALETTE.pine), {
            pos: [bx, h / 2, bz],
            rot: [0.04 * (i - 2), 0, 0.03],
          }),
        );
      }
      swayWeight = 0.85;
      colliderRadius = 0.34 * scale;
      break;
    }

    case 'tulipPatch': {
      const colors = [PALETTE.terracotta, PALETTE.ochre, PALETTE.rose, PALETTE.cutEdge];
      for (let i = 0; i < 6; i++) {
        const tx = ((i % 3) - 1) * 0.24;
        const tz = (Math.floor(i / 3) - 0.5) * 0.24;
        hinge.add(
          createPart(new THREE.BoxGeometry(0.03, 0.24, 0.02), P(PALETTE.sage), { pos: [tx, 0.12, tz] }),
          createPart(new THREE.ConeGeometry(0.08, 0.14, 4), P(colors[i % colors.length]), { pos: [tx, 0.26, tz], rot: [Math.PI, 0, 0] }),
        );
      }
      swayWeight = 0.75;
      colliderRadius = 0.18 * scale;
      break;
    }

    case 'karstPeak': {
      hinge.add(
        createCutoutMesh(makeKarstShape(1.15, 1.55), 0.14, P(PALETTE.sage), cutEdgeMat, { pos: [0, 0, 0] }),
        createCutoutMesh(makeKarstShape(0.75, 1.02), 0.12, P(PALETTE.pine), cutEdgeMat, { pos: [0.42, 0, 0.16], rot: [0, 0.2, 0] }),
      );
      colliderRadius = 0.64 * scale;
      break;
    }

    case 'sandDune':
    case 'snowPeak': {
      const col = type === 'sandDune' ? PALETTE.ochre : PALETTE.snow;
      hinge.add(createPart(new THREE.ConeGeometry(0.92, 0.95, 4), P(col), { pos: [0, 0.47, 0], rot: [0, 0.4, 0] }));
      hinge.add(createPart(new THREE.ConeGeometry(0.58, 0.62, 4), P(type === 'sandDune' ? PALETTE.mustard : '#e2e9ed'), { pos: [0.46, 0.31, 0.24], rot: [0, 0.9, 0] }));
      colliderRadius = 0.72 * scale;
      break;
    }

    case 'streetLamp':
    case 'stoneLantern':
    case 'hangingLantern': {
      const glow = P(PALETTE.lantern, { emissive: PALETTE.lantern, emissiveIntensity: 1.15, glowTag: true });
      if (type === 'stoneLantern') {
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.07, 0.12, 0.42, 6), P(PALETTE.paperShade), { pos: [0, 0.21, 0] }),
          createPart(new THREE.BoxGeometry(0.18, 0.18, 0.18), glow, { pos: [0, 0.48, 0] }),
          createPart(new THREE.ConeGeometry(0.24, 0.16, 4), P(PALETTE.ink), { pos: [0, 0.64, 0], rot: [0, Math.PI / 4, 0] }),
        );
      } else if (type === 'streetLamp') {
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.06, 0.09, 0.08, 6), P(PALETTE.ink), { pos: [0, 0.04, 0] }),
          createPart(new THREE.CylinderGeometry(0.028, 0.036, 0.92, 6), P(PALETTE.ink), { pos: [0, 0.5, 0] }),
          createPart(new THREE.CylinderGeometry(0.11, 0.08, 0.22, 6), glow, { pos: [0, 1.04, 0] }),
          createPart(new THREE.ConeGeometry(0.15, 0.12, 6), P(PALETTE.ink), { pos: [0, 1.2, 0] }),
        );
      } else {
        hinge.add(
          createPart(new THREE.CylinderGeometry(0.03, 0.04, 0.86, 5), P(PALETTE.ink), { pos: [0, 0.43, 0] }),
          createPart(new THREE.BoxGeometry(0.24, 0.04, 0.04), P(PALETTE.ink), { pos: [0.1, 0.82, 0] }),
          createPart(new THREE.CylinderGeometry(0.09, 0.08, 0.22, 6), glow, { pos: [0.18, 0.66, 0] }),
        );
      }
      lightPoolOffsets.push([0, 0.15, 0, 1.0]);
      colliderRadius = 0.22 * scale;
      break;
    }

    case 'sheep': {
      hinge.add(
        createPart(new THREE.BoxGeometry(0.42, 0.26, 0.28), P(PALETTE.cutEdge), { pos: [0, 0.24, 0] }),
        createPart(new THREE.BoxGeometry(0.16, 0.15, 0.16), P(PALETTE.ink), { pos: [0.24, 0.3, 0] }),
        createPart(new THREE.BoxGeometry(0.04, 0.14, 0.04), P(PALETTE.ink), { pos: [-0.12, 0.07, 0.08] }),
        createPart(new THREE.BoxGeometry(0.04, 0.14, 0.04), P(PALETTE.ink), { pos: [0.12, 0.07, 0.08] }),
      );
      colliderRadius = 0.28 * scale;
      break;
    }

    case 'kite': {
      const kiteGroup = new THREE.Group();
      kiteGroup.position.set(0, 1.35, 0);
      kiteGroup.add(
        createPart(new THREE.BoxGeometry(0.32, 0.32, 0.02), P(PALETTE.terracotta), { pos: [0, 0, 0], rot: [0.2, 0, Math.PI / 4] }),
        createPart(new THREE.BoxGeometry(0.06, 0.42, 0.01), P(PALETTE.ochre), { pos: [-0.14, -0.34, 0], rot: [0, 0, -0.25] }),
      );
      hinge.add(
        createPart(new THREE.CylinderGeometry(0.01, 0.01, 1.35, 4), P(PALETTE.ink), { pos: [0, 0.67, 0] }),
        kiteGroup,
      );
      animated.bob = kiteGroup;
      swayWeight = 0.9;
      colliderRadius = 0.15 * scale;
      break;
    }

    case 'bench': {
      const wood = P(PALETTE.kraft);
      hinge.add(
        createPart(new THREE.BoxGeometry(0.68, 0.05, 0.28), wood, { pos: [0, 0.24, 0] }),
        createPart(new THREE.BoxGeometry(0.68, 0.22, 0.04), wood, { pos: [0, 0.38, -0.12] }),
        createPart(new THREE.BoxGeometry(0.06, 0.24, 0.24), P(PALETTE.ink), { pos: [-0.26, 0.12, 0] }),
        createPart(new THREE.BoxGeometry(0.06, 0.24, 0.24), P(PALETTE.ink), { pos: [0.26, 0.12, 0] }),
      );
      colliderRadius = 0.36 * scale;
      break;
    }

    case 'fence':
    default: {
      const wood = P(PALETTE.paper);
      hinge.add(
        createPart(new THREE.BoxGeometry(1.05, 0.05, 0.04), wood, { pos: [0, 0.34, 0] }),
        createPart(new THREE.BoxGeometry(1.05, 0.05, 0.04), wood, { pos: [0, 0.18, 0] }),
        createPart(new THREE.BoxGeometry(0.07, 0.42, 0.06), P(PALETTE.ink), { pos: [-0.42, 0.21, 0] }),
        createPart(new THREE.BoxGeometry(0.07, 0.42, 0.06), P(PALETTE.ink), { pos: [0, 0.21, 0] }),
        createPart(new THREE.BoxGeometry(0.07, 0.42, 0.06), P(PALETTE.ink), { pos: [0.42, 0.21, 0] }),
      );
      colliderRadius = 0.2 * scale;
      break;
    }
  }

  let foldTarget = 1;
  let foldCurrent = 1;
  let foldVel = 0;

  function setFoldImmediate(t) {
    foldTarget = t;
    foldCurrent = t;
    foldVel = 0;
    const clamped = Math.max(0, Math.min(1.08, t));
    hinge.rotation.x = -(1 - clamped) * (Math.PI / 2);
    hinge.scale.y = Math.max(0.001, clamped);
    root.visible = clamped > 0.02;
  }

  function setFoldTarget(t) {
    foldTarget = t;
  }

  function update(dt, elapsed) {
    if (Math.abs(foldTarget - foldCurrent) > 0.001 || Math.abs(foldVel) > 0.001) {
      const omega = 13;
      const zeta = 0.72;
      const acc = omega * omega * (foldTarget - foldCurrent) - 2 * zeta * omega * foldVel;
      foldVel += acc * dt;
      foldCurrent += foldVel * dt;
      const c = Math.max(0, foldCurrent);
      hinge.rotation.x = -(1 - Math.min(1.08, c)) * (Math.PI / 2);
      hinge.scale.y = Math.max(0.001, Math.min(1.12, c));
      root.visible = c > 0.02;
    }

    if (swayWeight > 0.05 && foldCurrent > 0.85) {
      const phase = elapsed * 1.45 + x * 0.7 + z * 0.5;
      hinge.rotation.z = Math.sin(phase) * 0.045 * swayWeight;
    }
    if (animated.windmillHub) animated.windmillHub.rotation.z -= dt * 0.85;
    if (animated.beacon) animated.beacon.rotation.y += dt * 0.9;
    if (animated.flame) {
      const f = 1 + Math.sin(elapsed * 9.5 + x) * 0.14;
      animated.flame.scale.set(1, f, 1);
    }
    if (animated.bob) {
      animated.bob.position.y += Math.sin(elapsed * 2.1 + x) * 0.001;
      animated.bob.rotation.z = Math.sin(elapsed * 1.5 + z) * 0.035;
    }
  }

  return {
    root,
    hinge,
    colliderRadius,
    lightPoolOffsets,
    setFoldImmediate,
    setFoldTarget,
    update,
  };
}

// Layered cut-paper mountain/hill/skyline backdrop standing along rear edge of the open book (ui_04!)
export function buildMountainBackdrop(style, materials) {
  const group = new THREE.Group();
  const hinge = new THREE.Group();
  group.add(hinge);
  group.position.set(0, 0, -5.25);

  if (style === 'room') return null;

  const cutEdgeMat = materials.paper({ color: PALETTE.cutEdge, vary: false });
  const layerColors =
    style === 'dunes'
      ? [PALETTE.ochre, '#c99335']
      : style === 'skyline'
        ? ['#6e7a8a', '#4f5a6d']
        : ['#7b6355', '#553f34'];

  const layers = [
    { z: 0.35, h: 1.55, col: layerColors[0], seed: 0 },
    { z: -0.15, h: 2.35, col: layerColors[1], seed: 1 },
  ];

  for (const l of layers) {
    const s = new THREE.Shape();
    s.moveTo(-5.8, 0);
    if (style === 'skyline') {
      const pts = [-5.8, -4.4, -3.1, -1.8, -0.4, 1.0, 2.3, 3.8, 5.8];
      for (let i = 0; i < pts.length - 1; i++) {
        const bh = l.h * (0.45 + ((i * 37 + l.seed * 19) % 50) / 100);
        s.lineTo(pts[i], bh);
        s.lineTo(pts[i + 1], bh);
      }
    } else {
      const peaks =
        l.seed === 0
          ? [[-4.2, 0.72], [-2.1, 0.42], [0.2, 0.92], [2.4, 0.55], [4.3, 0.78]]
          : [[-4.6, 0.5], [-2.8, 0.95], [-0.9, 0.62], [1.4, 1.0], [3.6, 0.68], [4.9, 0.82]];
      for (const [px, py] of peaks) {
        s.quadraticCurveTo(px - 0.6, py * l.h * 0.8, px, py * l.h);
      }
    }
    s.lineTo(5.8, 0);
    s.closePath();

    const mesh = createCutoutMesh(s, 0.036, materials.paper({ color: l.col, vary: false }), cutEdgeMat, {
      pos: [0, 0, l.z],
    });
    hinge.add(mesh);
  }

  let foldCurrent = 0.01;
  let foldTarget = 0.01;
  let foldVel = 0;

  function setFoldImmediate(t) {
    foldCurrent = t;
    foldTarget = t;
    hinge.rotation.x = -(1 - t) * (Math.PI / 2);
    group.visible = t > 0.02;
  }

  function setFoldTarget(t) {
    foldTarget = t;
  }

  function update(dt) {
    if (Math.abs(foldTarget - foldCurrent) > 0.001 || Math.abs(foldVel) > 0.001) {
      const acc = 121 * (foldTarget - foldCurrent) - 17.6 * foldVel;
      foldVel += acc * dt;
      foldCurrent += foldVel * dt;
      const c = Math.max(0, Math.min(1.06, foldCurrent));
      hinge.rotation.x = -(1 - c) * (Math.PI / 2);
      group.visible = c > 0.02;
    }
  }

  return { group, setFoldImmediate, setFoldTarget, update };
}

export function createWeatherSystem(type, bounds = 5.9) {
  const count = type === 'fireflies' ? 38 : 56;
  const group = new THREE.Group();

  const colorMap = {
    sakura: '#f2b1a8',
    snow: '#fbf8f2',
    fireflies: '#ffd86b',
    leaves: '#91a162',
    dust: '#e6c385',
    breeze: '#fbf6ea',
  };

  const geo =
    type === 'fireflies' || type === 'snow'
      ? new THREE.OctahedronGeometry(0.045, 0)
      : new THREE.PlaneGeometry(0.11, 0.07);

  const mat = new THREE.MeshBasicMaterial({
    color: colorMap[type] || '#fbf6ea',
    side: THREE.DoubleSide,
    transparent: true,
    opacity: type === 'breeze' ? 0.55 : 0.88,
  });

  const particles = [];
  for (let i = 0; i < count; i++) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * bounds * 2,
      0.25 + Math.random() * 3.8,
      (Math.random() - 0.5) * bounds * 2,
    );
    mesh.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    group.add(mesh);
    particles.push({
      mesh,
      vx: (Math.random() - 0.3) * 0.35,
      vy: type === 'fireflies' ? (Math.random() - 0.5) * 0.25 : -(0.22 + Math.random() * 0.32),
      vz: (Math.random() - 0.5) * 0.25,
      phase: Math.random() * Math.PI * 2,
    });
  }

  function update(dt, elapsed) {
    for (const p of particles) {
      const m = p.mesh;
      m.position.x += (p.vx + Math.sin(elapsed * 1.1 + p.phase) * 0.22) * dt;
      m.position.y += (p.vy + (type === 'fireflies' ? Math.cos(elapsed * 1.8 + p.phase) * 0.16 : 0)) * dt;
      m.position.z += p.vz * dt;
      m.rotation.x += dt * 1.1;
      m.rotation.y += dt * 0.8;

      if (m.position.y < 0.08) {
        m.position.y = 3.8;
        m.position.x = (Math.random() - 0.5) * bounds * 2;
        m.position.z = (Math.random() - 0.5) * bounds * 2;
      } else if (m.position.y > 4.1) {
        m.position.y = 0.3;
      }
      if (m.position.x > bounds) m.position.x = -bounds;
      if (m.position.x < -bounds) m.position.x = bounds;
      if (m.position.z > bounds) m.position.z = -bounds;
      if (m.position.z < -bounds) m.position.z = bounds;
    }
  }

  return {
    group,
    update,
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
}
