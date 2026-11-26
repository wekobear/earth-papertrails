import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';
import { addCutEdgeLines } from '../render/paperMaterial.js';

export function createTraveller({ materials, audio }) {
  const group = new THREE.Group();
  const rig = new THREE.Group();
  group.add(rig);

  const cloakMat = materials.paper({ color: PALETTE.terracotta });
  const scarfMat = materials.paper({ color: PALETTE.ochre });
  const skinMat = materials.paper({ color: PALETTE.cutEdge });
  const inkMat = materials.paper({ color: PALETTE.ink });
  const packMat = materials.paper({ color: PALETTE.kraft });
  const lanternMat = materials.paper({
    color: PALETTE.lantern,
    emissive: PALETTE.lantern,
    emissiveIntensity: 1.35,
    glowTag: true,
  });

  function mk(geo, mat, pos, rot = [0, 0, 0]) {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(pos[0], pos[1], pos[2]);
    m.rotation.set(rot[0], rot[1], rot[2]);
    m.castShadow = true;
    m.receiveShadow = true;
    addCutEdgeLines(m, PALETTE.ink, 0.36, 22);
    return m;
  }

  const torsoPivot = new THREE.Group();
  torsoPivot.position.set(0, 0.32, 0);
  rig.add(torsoPivot);

  torsoPivot.add(
    mk(new THREE.ConeGeometry(0.19, 0.44, 5), cloakMat, [0, 0.22, 0]),
    mk(new THREE.CylinderGeometry(0.11, 0.14, 0.08, 6), scarfMat, [0, 0.42, 0]),
    mk(new THREE.BoxGeometry(0.2, 0.22, 0.12), packMat, [0, 0.24, -0.14]),
  );

  const headPivot = new THREE.Group();
  headPivot.position.set(0, 0.46, 0);
  torsoPivot.add(headPivot);
  headPivot.add(
    mk(new THREE.BoxGeometry(0.18, 0.18, 0.16), skinMat, [0, 0.1, 0]),
    mk(new THREE.CylinderGeometry(0.24, 0.24, 0.03, 8), inkMat, [0, 0.19, 0]),
    mk(new THREE.ConeGeometry(0.13, 0.14, 6), scarfMat, [0, 0.27, 0]),
  );

  const legLPivot = new THREE.Group();
  legLPivot.position.set(-0.07, 0.32, 0);
  legLPivot.add(mk(new THREE.BoxGeometry(0.06, 0.32, 0.05), inkMat, [0, -0.16, 0]));

  const legRPivot = new THREE.Group();
  legRPivot.position.set(0.07, 0.32, 0);
  legRPivot.add(mk(new THREE.BoxGeometry(0.06, 0.32, 0.05), inkMat, [0, -0.16, 0]));
  rig.add(legLPivot, legRPivot);

  const armLPivot = new THREE.Group();
  armLPivot.position.set(-0.16, 0.4, 0);
  armLPivot.add(mk(new THREE.BoxGeometry(0.05, 0.24, 0.05), cloakMat, [0, -0.11, 0]));

  const armRPivot = new THREE.Group();
  armRPivot.position.set(0.16, 0.4, 0);
  armRPivot.add(mk(new THREE.BoxGeometry(0.05, 0.24, 0.05), cloakMat, [0, -0.11, 0]));

  const lanternPivot = new THREE.Group();
  lanternPivot.position.set(0, -0.22, 0.07);
  const lanternBulb = mk(new THREE.BoxGeometry(0.11, 0.14, 0.11), lanternMat, [0, -0.09, 0]);
  lanternPivot.add(
    mk(new THREE.CylinderGeometry(0.008, 0.008, 0.09, 4), inkMat, [0, -0.02, 0]),
    lanternBulb,
  );
  armRPivot.add(lanternPivot);
  torsoPivot.add(armLPivot, armRPivot);

  const velocity = new THREE.Vector3();
  const lanternWorldPos = new THREE.Vector3(0, 0.6, 0);
  let heading = 0;
  let yawRate = 0;
  let phase = 0;
  let gait = 0;
  let clock = 0;
  let lean = 0;
  let leanVel = 0;
  let roll = 0;
  let rollVel = 0;
  let lanX = 0;
  let lanVX = 0;
  let lanZ = 0;
  let lanVZ = 0;
  let prevForward = 0;

  function resetPose() {
    velocity.set(0, 0, 0);
    phase = 0;
    gait = 0;
    lean = 0;
    leanVel = 0;
    roll = 0;
    rollVel = 0;
    lanX = 0;
    lanVX = 0;
    lanZ = 0;
    lanVZ = 0;
    prevForward = 0;
    yawRate = 0;
  }

  function resolveCollisions(pos, colliders, halfBound) {
    const r = 0.26;
    pos.x = Math.max(-halfBound, Math.min(halfBound, pos.x));
    pos.z = Math.max(-halfBound, Math.min(halfBound, pos.z));
    for (const c of colliders) {
      const dx = pos.x - c.x;
      const dz = pos.z - c.z;
      const minD = r + c.r;
      const d2 = dx * dx + dz * dz;
      if (d2 < minD * minD) {
        const d = Math.sqrt(d2) || 0.001;
        pos.x = c.x + (dx / d) * minD;
        pos.z = c.z + (dz / d) * minD;
      }
    }
  }

  function update(dt, input, { colliders = [], halfBound = 5.4, run = false, heightAt = () => 0 } = {}) {
    clock += dt;
    let ix = input.x || 0;
    let iz = input.z || 0;
    const il = Math.hypot(ix, iz);
    if (il > 1) {
      ix /= il;
      iz /= il;
    }

    const baseSpeed = run ? 3.55 : 2.3;
    const accel = 16;
    const targetVx = ix * baseSpeed;
    const targetVz = iz * baseSpeed;
    const dvx = targetVx - velocity.x;
    const dvz = targetVz - velocity.z;
    const dvl = Math.hypot(dvx, dvz);
    if (dvl <= accel * dt) {
      velocity.x = targetVx;
      velocity.z = targetVz;
    } else {
      velocity.x += (dvx / dvl) * accel * dt;
      velocity.z += (dvz / dvl) * accel * dt;
    }

    const speed = Math.hypot(velocity.x, velocity.z);
    let dh = 0;
    if (il > 0.05 || speed > 0.2) {
      const want = il > 0.05 ? Math.atan2(ix, iz) : Math.atan2(velocity.x, velocity.z);
      let diff = want - heading;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      dh = diff * (1 - Math.exp(-12 * dt));
      heading += dh;
    }
    yawRate += (dh / Math.max(dt, 0.001) - yawRate) * (1 - Math.exp(-16 * dt));

    const prevX = group.position.x;
    const prevZ = group.position.z;
    group.position.x += velocity.x * dt;
    group.position.z += velocity.z * dt;
    resolveCollisions(group.position, colliders, halfBound);

    const targetY = heightAt(group.position.x, group.position.z) || 0;
    group.position.y += (targetY - group.position.y) * (1 - Math.exp(-14 * dt));

    const moved = Math.hypot(group.position.x - prevX, group.position.z - prevZ);
    const actualSpeed = moved / Math.max(dt, 0.001);

    const speedFrac = Math.min(1, actualSpeed / 2.3);
    const gaitTarget = Math.min(1, speedFrac / 0.45);
    gait += (gaitTarget - gait) * (1 - Math.exp(-12 * dt));

    if (moved > 0.0005) {
      const before = phase;
      phase += (moved / 0.56) * Math.PI;
      if ((before < Math.PI && phase >= Math.PI) || phase >= Math.PI * 2) {
        if (phase >= Math.PI * 2) phase -= Math.PI * 2;
        if (actualSpeed > 0.35 && audio) audio.playFootstep();
      }
    } else {
      const rest = Math.round(phase / Math.PI) * Math.PI;
      phase += (rest - phase) * (1 - Math.exp(-12 * dt));
      if (Math.abs(rest - phase) < 0.01) phase = rest >= Math.PI * 2 ? 0 : rest;
    }

    const fwdX = Math.sin(heading);
    const fwdZ = Math.cos(heading);
    const forward = velocity.x * fwdX + velocity.z * fwdZ;
    const accF = Math.max(-14, Math.min(14, (forward - prevForward) / Math.max(dt, 0.001)));
    prevForward = forward;
    const accL = Math.max(-14, Math.min(14, actualSpeed * yawRate));

    const leanTarget = 0.14 * Math.max(-0.4, Math.min(1, forward / 2.3));
    const rollTarget = Math.max(-0.18, Math.min(0.18, -yawRate * 0.045)) * speedFrac;
    const wl = Math.PI * 2 * 2.8;
    const wp = Math.PI * 2 * 1.9;
    const lanTX = 0.025 * accF + 0.18 * gait * Math.sin(phase);
    const lanTZ = -0.025 * accL + 0.12 * gait * Math.cos(phase);

    leanVel += (wl * wl * (leanTarget - lean) - 2 * 0.7 * wl * leanVel) * dt;
    lean += leanVel * dt;
    rollVel += (wl * wl * (rollTarget - roll) - 2 * 0.65 * wl * rollVel) * dt;
    roll += rollVel * dt;

    lanVX += (wp * wp * (lanTX - lanX) - 2 * 0.32 * wp * lanVX) * dt;
    lanX += lanVX * dt;
    lanVZ += (wp * wp * (lanTZ - lanZ) - 2 * 0.32 * wp * lanVZ) * dt;
    lanZ += lanVZ * dt;

    const sinP = Math.sin(phase);
    const cosP = Math.cos(phase);
    const idle = 1 - gait;
    const breathe = Math.sin(clock * Math.PI * 2 * 0.45);

    rig.position.y = 0.045 * gait * Math.abs(sinP);
    rig.rotation.set(lean + 0.02 * idle * breathe, 0.06 * gait * sinP, roll + 0.05 * gait * sinP);

    const legSwing = 0.56 * gait * cosP;
    legLPivot.rotation.x = -legSwing;
    legRPivot.rotation.x = legSwing;

    const armSwing = 0.46 * gait * cosP;
    armLPivot.rotation.x = armSwing + 0.04 * idle * breathe;
    armRPivot.rotation.x = -armSwing * 0.35;

    torsoPivot.rotation.x = 0.06 * gait * Math.sin(phase * 2 - 1.1);
    headPivot.rotation.x = 0.07 * (gait * Math.sin(phase * 2 - 1.6) + idle * 0.5 * breathe);
    lanternPivot.rotation.set(lanX, 0, lanZ);
    group.rotation.y = heading;

    lanternBulb.getWorldPosition(lanternWorldPos);
  }

  return {
    group,
    position: group.position,
    lanternWorldPos,
    teleport(x, z, faceHeading = 0, y = 0) {
      group.position.set(x, y, z);
      heading = faceHeading;
      resetPose();
      group.rotation.y = heading;
      lanternBulb.getWorldPosition(lanternWorldPos);
    },
    update,
  };
}
