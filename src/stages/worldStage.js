import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';
import {
  addCutEdgeLines,
  createFloorArtTexture,
  createWoodTexture,
  setGroundLightPools,
} from '../render/paperMaterial.js';
import { buildMountainBackdrop, buildPaperProp, createWeatherSystem } from '../world/propKit.js';
import { createTraveller } from '../world/traveller.js';
import { collectScrap, getStamp, hasScrap } from '../core/storage.js';

export function createWorldStage({ materials, audio, progress, onOpenSpot, onCollectScrap, onRequestExit }) {
  const group = new THREE.Group();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  const traveller = createTraveller({ materials, audio });

  // Textured warm walnut study table underneath the open pop-up book
  const tableTex = createWoodTexture(true);
  tableTex.repeat.set(3, 2);
  const tableMesh = new THREE.Mesh(
    new THREE.BoxGeometry(36, 0.6, 28),
    materials.paper({ map: tableTex, color: '#a88468', fibre: 'world' }),
  );
  tableMesh.position.set(0, -0.82, 0);
  tableMesh.receiveShadow = true;
  group.add(tableMesh);

  let worldRoot = new THREE.Group();
  group.add(worldRoot);

  let currentScene = null;
  let propEntries = [];
  let backdropObj = null;
  let colliders = [];
  let spotEntries = [];
  let lightPoolSources = [];
  let scrapEntry = null;
  let weather = null;
  let active = false;
  let entryTime = 0;

  const keys = new Set();
  let clickTarget = null;
  let clickRing = null;
  let clickRingAge = 0;
  let pointerWalking = false;

  const VIEW_MODES = ['follow', 'macro', 'overview'];
  let viewIdx = 0;
  let cameraYaw = 0;
  let zoomFactor = 1.0;
  let rightDragging = false;
  let lastRightX = 0;
  let lastAutoSpotId = null;
  let joyX = 0;
  let joyZ = 0;
  const activePointers = new Map();
  let pinchStartDist = 0;
  let pinchStartZoom = 1.0;
  let twoFingerMidX = 0;

  const HALF_BOUND = 5.3;

  // Hand-inked multi-dash oval target circle (matching ui_03_papertrails_world_day.png)
  function buildHandInkedTargetRing() {
    const pos = [];
    const dashes = 12;
    const radius = 0.44;
    const stroke = 0.028;
    for (let i = 0; i < dashes; i++) {
      const a0 = (i / dashes) * Math.PI * 2 + (i % 2) * 0.04;
      const a1 = a0 + ((Math.PI * 2) / dashes) * 0.56;
      const x0 = Math.cos(a0) * radius;
      const z0 = Math.sin(a0) * radius * 0.86;
      const x1 = Math.cos(a1) * radius;
      const z1 = Math.sin(a1) * radius * 0.86;
      const dx = x1 - x0;
      const dz = z1 - z0;
      const len = Math.hypot(dx, dz) || 1;
      const nx = (-dz / len) * stroke;
      const nz = (dx / len) * stroke;
      pos.push(
        x0 + nx, 0, z0 + nz, x1 + nx, 0, z1 + nz, x1 - nx, 0, z1 - nz,
        x0 + nx, 0, z0 + nz, x1 - nx, 0, z1 - nz, x0 - nx, 0, z0 - nz,
      );
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const mat = new THREE.MeshBasicMaterial({
      color: PALETTE.ink,
      transparent: true,
      opacity: 0.72,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = 0.022;
    mesh.visible = false;
    return mesh;
  }

  function buildCobblestonePath(parent, scene) {
    if (scene.wallTheme === 'indoor') return;
    const stones = [
      [-0.25, 3.2], [0.18, 2.75], [-0.12, 2.25], [0.22, 1.75],
      [-0.18, 1.25], [0.15, 0.75], [-0.22, -0.75], [0.14, -1.3], [-0.15, -1.85],
    ];
    for (let i = 0; i < stones.length; i++) {
      const [sx, sz] = stones[i];
      if (scene.hasCanal && Math.abs(sx) < 1.3) continue;
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(0.32 + (i % 2) * 0.08, 0.018, 0.24 + ((i + 1) % 2) * 0.06),
        materials.paper({ color: i % 2 === 0 ? PALETTE.cutEdge : PALETTE.kraft, fibre: 'world' }),
      );
      m.position.set(sx, 0.012, sz);
      m.rotation.y = (i % 3) * 0.16 - 0.12;
      m.receiveShadow = true;
      addCutEdgeLines(m, PALETTE.ink, 0.24);
      parent.add(m);
    }
  }

  function buildOpenBookBase(parent, scene) {
    // Hardcover board underneath
    const cover = new THREE.Mesh(
      new THREE.BoxGeometry(13.2, 0.18, 12.2),
      materials.paper({ color: PALETTE.umber, fibre: 'world' }),
    );
    cover.position.set(0, -0.44, 0);
    cover.receiveShadow = true;
    parent.add(cover);

    // 5 stepped cream page stack layers so book edges read like real thick open pages (ui_03 / ui_04)
    for (let i = 0; i < 4; i++) {
      const w = 12.75 - i * 0.14;
      const d = 11.75 - i * 0.12;
      const stack = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.075, d),
        materials.paper({ color: i % 2 === 0 ? PALETTE.paperShade : PALETTE.paper, fibre: 'world' }),
      );
      stack.position.set(0, -0.31 + i * 0.075, 0);
      stack.castShadow = true;
      stack.receiveShadow = true;
      addCutEdgeLines(stack, PALETTE.ink, 0.24, 24);
      parent.add(stack);
    }

    const floorTex = createFloorArtTexture(scene, true);
    const pageSurface = new THREE.Mesh(
      new THREE.PlaneGeometry(12.2, 11.35),
      materials.paper({ map: floorTex, color: '#ffffff', fibre: 'world', vary: false }),
    );
    pageSurface.rotation.x = -Math.PI / 2;
    pageSurface.position.y = 0.002;
    pageSurface.receiveShadow = true;
    parent.add(pageSurface);

    // Raised cream cardstock canal banks on left & right when scene has a canal (ui_03!)
    if (scene.hasCanal) {
      const bankMat = materials.paper({ color: scene.floorColor || PALETTE.paper, fibre: 'world' });
      const leftBank = new THREE.Mesh(new THREE.BoxGeometry(4.65, 0.14, 11.3), bankMat);
      leftBank.position.set(-3.78, 0.07, 0);
      leftBank.receiveShadow = true;
      leftBank.castShadow = true;
      addCutEdgeLines(leftBank, PALETTE.ink, 0.25);

      const rightBank = new THREE.Mesh(new THREE.BoxGeometry(4.65, 0.14, 11.3), bankMat);
      rightBank.position.set(3.78, 0.07, 0);
      rightBank.receiveShadow = true;
      rightBank.castShadow = true;
      addCutEdgeLines(rightBank, PALETTE.ink, 0.25);

      parent.add(leftBank, rightBank);
    }

    // Center spine crease valley
    const gutter = new THREE.Mesh(
      new THREE.PlaneGeometry(0.08, 11.35),
      materials.paper({ color: PALETTE.kraft, vary: false }),
    );
    gutter.rotation.x = -Math.PI / 2;
    gutter.position.y = 0.005;
    parent.add(gutter);
  }

  function heightAt(x, z) {
    if (!currentScene?.hasCanal) return 0;
    // Raised banks outside canal x ∈ [-1.45, 1.45]; bridge deck at z ∈ [-0.45, 0.45] arches smoothly over
    if (Math.abs(x) >= 1.45) return 0.14;
    if (Math.abs(z) <= 0.55) {
      return 0.14 + Math.max(0, 1 - Math.abs(x) / 1.45) * 0.34;
    }
    return 0.02;
  }

  function buildSceneDiorama(scene) {
    currentScene = scene;
    if (weather) {
      weather.dispose();
      weather = null;
    }
    group.remove(worldRoot);
    worldRoot = new THREE.Group();
    group.add(worldRoot);

    propEntries = [];
    colliders = [];
    spotEntries = [];
    lightPoolSources = [];
    scrapEntry = null;
    clickTarget = null;
    lastAutoSpotId = null;

    buildOpenBookBase(worldRoot, scene);
    buildCobblestonePath(worldRoot, scene);

    // Layered Cut-Paper Mountain / Skyline Backdrop
    backdropObj = buildMountainBackdrop(scene.backdropStyle, materials);
    if (backdropObj) {
      backdropObj.setFoldImmediate(0.01);
      worldRoot.add(backdropObj.group);
    }

    // Staggered Pop-Up Props
    scene.worldProps.forEach((spec, idx) => {
      const prop = buildPaperProp(spec.type, materials, spec);
      const baseH = scene.hasCanal && Math.abs(spec.x) >= 1.45 ? 0.14 : 0;
      prop.root.position.y = baseH;
      prop.setFoldImmediate(0.01);
      worldRoot.add(prop.root);
      propEntries.push({
        prop,
        delay: 0.08 + idx * 0.055,
        popped: false,
      });
      colliders.push({ x: spec.x, z: spec.z, r: prop.colliderRadius });

      for (const off of prop.lightPoolOffsets) {
        lightPoolSources.push({
          x: spec.x + off[0],
          y: baseH + off[1],
          z: spec.z + off[2],
          strength: off[3] ?? 1,
        });
      }
    });

    // Interactive Footprint Landmarks (glowing diamond pins + ground inked rings)
    scene.spots.forEach((spot, idx) => {
      const spotGroup = new THREE.Group();
      const baseY = heightAt(spot.pos[0], spot.pos[1]);
      spotGroup.position.set(spot.pos[0], baseY, spot.pos[1]);

      const collected = !!getStamp(progress, scene.id, spot.id);
      const ringMat = new THREE.MeshBasicMaterial({
        color: collected ? PALETTE.pine : PALETTE.terracotta,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.38, 0.47, 24), ringMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.014;
      spotGroup.add(ring);

      const pinMat = materials.paper({
        color: collected ? PALETTE.sage : PALETTE.lantern,
        emissive: collected ? PALETTE.pine : PALETTE.lantern,
        emissiveIntensity: collected ? 0.35 : 0.95,
        glowTag: true,
      });
      const pin = new THREE.Mesh(new THREE.OctahedronGeometry(0.18, 0), pinMat);
      pin.position.y = 1.12;
      pin.castShadow = true;
      addCutEdgeLines(pin, PALETTE.ink, 0.45);
      spotGroup.add(pin);

      const hitSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 8, 8),
        new THREE.MeshBasicMaterial({ visible: false }),
      );
      hitSphere.position.y = 0.78;
      hitSphere.userData.spotIndex = idx;
      spotGroup.add(hitSphere);

      worldRoot.add(spotGroup);
      spotEntries.push({
        spot,
        spotGroup,
        ring,
        ringMat,
        pin,
        pinMat,
        hitSphere,
        phase: idx * 1.3,
      });
    });

    // Collectible Ground Pressed Paper Keepsake (SCRAP)
    if (scene.keepsake && !hasScrap(progress, scene.id, scene.keepsake.id)) {
      const [sx, sz] = scene.scrapPos || [1.8, 2.2];
      const sy = heightAt(sx, sz);
      const scrapGroup = new THREE.Group();
      scrapGroup.position.set(sx, sy + 0.04, sz);
      const scrapMat = materials.paper({
        color: scene.keepsake.kind === 'sakura' ? PALETTE.rose : scene.keepsake.kind === 'snowflake' ? PALETTE.cutEdge : PALETTE.ochre,
        emissive: PALETTE.lantern,
        emissiveIntensity: 0.4,
        glowTag: true,
      });
      const leafMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), scrapMat);
      leafMesh.scale.set(1.3, 0.25, 1.0);
      addCutEdgeLines(leafMesh, PALETTE.ink, 0.45);
      const scrapHit = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
      scrapHit.userData.isScrap = true;
      scrapGroup.add(leafMesh, scrapHit);
      worldRoot.add(scrapGroup);
      scrapEntry = { group: scrapGroup, mesh: leafMesh, hit: scrapHit, x: sx, z: sz };
    }

    weather = createWeatherSystem(scene.weather, 5.8);
    worldRoot.add(weather.group);

    clickRing = buildHandInkedTargetRing();
    worldRoot.add(clickRing);

    const startX = scene.hasCanal ? 2.1 : 0;
    const startZ = 3.5;
    traveller.teleport(startX, startZ, Math.PI, heightAt(startX, startZ));
    worldRoot.add(traveller.group);
  }

  function refreshSpotVisuals() {
    if (!currentScene) return;
    for (const entry of spotEntries) {
      const collected = !!getStamp(progress, currentScene.id, entry.spot.id);
      entry.ringMat.color.set(collected ? PALETTE.pine : PALETTE.terracotta);
      entry.pinMat.color.set(collected ? PALETTE.sage : PALETTE.lantern);
      entry.pinMat.emissive.set(collected ? PALETTE.pine : PALETTE.lantern);
      entry.pinMat.userData.baseEmissiveIntensity = collected ? 0.35 : 0.95;
    }
  }

  function tryCollectScrap() {
    if (!scrapEntry || !currentScene?.keepsake) return;
    const added = collectScrap(progress, currentScene.id, currentScene.keepsake.id);
    worldRoot.remove(scrapEntry.group);
    scrapEntry = null;
    if (added) {
      audio.playStamp();
      onCollectScrap?.(currentScene, currentScene.keepsake);
    }
  }

  function setClickDestination(e, dom, camera) {
    const rect = dom.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);

    const hitTargets = spotEntries.map((s) => s.hitSphere);
    if (scrapEntry) hitTargets.push(scrapEntry.hit);

    const spotHits = raycaster.intersectObjects(hitTargets, false);
    if (spotHits.length > 0) {
      const obj = spotHits[0].object;
      if (obj.userData.isScrap) {
        tryCollectScrap();
        return true;
      }
      const chosen = spotEntries[obj.userData.spotIndex];
      if (chosen) {
        audio.playFoldPop(1.1);
        onOpenSpot?.(chosen.spot);
        return true;
      }
    }

    const hitPoint = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(groundPlane, hitPoint)) {
      const cx = Math.max(-HALF_BOUND, Math.min(HALF_BOUND, hitPoint.x));
      const cz = Math.max(-HALF_BOUND, Math.min(HALF_BOUND, hitPoint.z));
      clickTarget = { x: cx, z: cz };
      clickRing.position.set(cx, heightAt(cx, cz) + 0.022, cz);
      clickRing.visible = true;
      clickRingAge = 0;
      return true;
    }
    return false;
  }

  function onPointerDown(e, dom, camera) {
    if (!active) return;
    if (e.pointerType === 'touch') {
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size >= 2) {
        // Cancel walk tap when 2nd finger enters for pinch/orbit
        pointerWalking = false;
        clickTarget = null;
        clickRing.visible = false;
        const pts = Array.from(activePointers.values());
        pinchStartDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
        pinchStartZoom = zoomFactor;
        twoFingerMidX = (pts[0].x + pts[1].x) * 0.5;
        return;
      }
      pointerWalking = true;
      setClickDestination(e, dom, camera);
      return;
    }
    if (e.button === 2) {
      rightDragging = true;
      lastRightX = e.clientX;
      return;
    }
    if (e.button === 0) {
      pointerWalking = true;
      setClickDestination(e, dom, camera);
    }
  }

  function onPointerMove(e, dom, camera) {
    if (!active) return;
    if (e.pointerType === 'touch' && activePointers.has(e.pointerId)) {
      activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (activePointers.size >= 2) {
        const pts = Array.from(activePointers.values());
        const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y) || 1;
        zoomFactor = Math.max(0.65, Math.min(1.5, pinchStartZoom * (pinchStartDist / dist)));
        const midX = (pts[0].x + pts[1].x) * 0.5;
        cameraYaw -= (midX - twoFingerMidX) * 0.007;
        twoFingerMidX = midX;
        return;
      }
    }
    if (rightDragging) {
      const dx = e.clientX - lastRightX;
      lastRightX = e.clientX;
      cameraYaw -= dx * 0.006;
      return;
    }
    if (pointerWalking) {
      setClickDestination(e, dom, camera);
      return;
    }
    const rect = dom.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const targets = spotEntries.map((s) => s.hitSphere);
    if (scrapEntry) targets.push(scrapEntry.hit);
    const hits = raycaster.intersectObjects(targets, false);
    dom.style.cursor = hits.length > 0 ? 'pointer' : 'crosshair';
  }

  function onPointerUp(e) {
    if (e.pointerType === 'touch') {
      activePointers.delete(e.pointerId);
      if (activePointers.size < 2) pinchStartDist = 0;
      if (activePointers.size === 0) pointerWalking = false;
      return;
    }
    if (e.button === 2) rightDragging = false;
    pointerWalking = false;
  }

  function onKeyDown(e) {
    if (!active) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    keys.add(e.code);
    if (e.code === 'Escape') {
      onRequestExit?.();
    }
  }

  function onKeyUp(e) {
    keys.delete(e.code);
  }

  return {
    group,
    get currentViewLabel() {
      const mode = VIEW_MODES[viewIdx];
      return mode === 'follow' ? '跟随' : mode === 'macro' ? '近景' : '全景';
    },
    cycleView() {
      viewIdx = (viewIdx + 1) % VIEW_MODES.length;
      return this.currentViewLabel;
    },
    focusSpot(spot) {
      clickTarget = { x: spot.pos[0], z: spot.pos[1] };
      clickRing.position.set(spot.pos[0], heightAt(spot.pos[0], spot.pos[1]) + 0.022, spot.pos[1]);
      clickRing.visible = true;
      clickRingAge = 0;
    },
    refreshSpotVisuals,
    setJoystickInput(x, z) {
      joyX = x || 0;
      joyZ = z || 0;
    },
    enter(scene, camera) {
      active = true;
      entryTime = 0;
      viewIdx = 0;
      cameraYaw = 0;
      zoomFactor = 1.0;
      joyX = 0;
      joyZ = 0;
      activePointers.clear();
      keys.clear();
      buildSceneDiorama(scene);
      camera.fov = 34;
      const aspectBoost = camera.aspect < 0.9 ? Math.min(1.55, 0.92 / Math.max(0.45, camera.aspect)) : 1;
      camera.position.set(0, 6.9 * aspectBoost, 9.8 * aspectBoost);
      camera.lookAt(0, 0.35, 2.6);
      camera.updateProjectionMatrix();
    },
    leave() {
      active = false;
      keys.clear();
      activePointers.clear();
      pointerWalking = false;
      rightDragging = false;
      joyX = 0;
      joyZ = 0;
      setGroundLightPools([], 0, 0);
    },
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onKeyDown,
    onKeyUp,
    update(dt, elapsed, camera, lights) {
      entryTime += dt;

      if (backdropObj) {
        if (entryTime > 0.06) backdropObj.setFoldTarget(1);
        backdropObj.update(dt);
      }

      for (const item of propEntries) {
        if (entryTime >= item.delay && !item.popped) {
          item.popped = true;
          item.prop.setFoldTarget(1);
          audio.playFoldPop(0.85);
        }
        item.prop.update(dt, elapsed);
      }

      let kx = 0;
      let kz = 0;
      if (keys.has('KeyW') || keys.has('ArrowUp')) kz -= 1;
      if (keys.has('KeyS') || keys.has('ArrowDown')) kz += 1;
      if (keys.has('KeyA') || keys.has('ArrowLeft')) kx -= 1;
      if (keys.has('KeyD') || keys.has('ArrowRight')) kx += 1;

      const input = { x: 0, z: 0 };
      const jLen = Math.hypot(joyX, joyZ);
      if (kx !== 0 || kz !== 0) {
        clickTarget = null;
        clickRing.visible = false;
        const cos = Math.cos(cameraYaw);
        const sin = Math.sin(cameraYaw);
        input.x = kx * cos + kz * sin;
        input.z = -kx * sin + kz * cos;
      } else if (jLen > 0.08) {
        clickTarget = null;
        clickRing.visible = false;
        const cos = Math.cos(cameraYaw);
        const sin = Math.sin(cameraYaw);
        input.x = joyX * cos + joyZ * sin;
        input.z = -joyX * sin + joyZ * cos;
      } else if (clickTarget) {
        const dx = clickTarget.x - traveller.position.x;
        const dz = clickTarget.z - traveller.position.z;
        const d = Math.hypot(dx, dz);
        if (d < 0.22) {
          clickTarget = null;
        } else {
          const factor = Math.min(1, d / 0.55);
          input.x = (dx / d) * factor;
          input.z = (dz / d) * factor;
        }
      }

      if (clickRing && clickRing.visible) {
        clickRingAge += dt;
        const s = 0.92 + Math.sin(clickRingAge * 7) * 0.08;
        clickRing.scale.setScalar(s);
        if (!clickTarget && clickRingAge > 0.65) clickRing.visible = false;
      }

      const run = keys.has('ShiftLeft') || keys.has('ShiftRight');
      traveller.update(dt, input, { colliders, halfBound: HALF_BOUND, run, heightAt });

      // Spotlight pins + proximity trigger
      let nearestSpot = null;
      let nearestDist = Infinity;
      for (const s of spotEntries) {
        s.pin.position.y = 1.05 + Math.sin(elapsed * 2.4 + s.phase) * 0.12;
        s.pin.rotation.y = elapsed * 1.2 + s.phase;
        const d = Math.hypot(traveller.position.x - s.spot.pos[0], traveller.position.z - s.spot.pos[1]);
        if (d < nearestDist) {
          nearestDist = d;
          nearestSpot = s.spot;
        }
      }
      if (nearestDist < 1.15 && nearestSpot && nearestSpot.id !== lastAutoSpotId) {
        lastAutoSpotId = nearestSpot.id;
        audio.playFoldPop(1.0);
        onOpenSpot?.(nearestSpot);
      } else if (nearestDist > 1.75) {
        lastAutoSpotId = null;
      }

      // Collectible ground scrap
      if (scrapEntry) {
        scrapEntry.mesh.rotation.y = elapsed * 1.4;
        scrapEntry.mesh.position.y = Math.sin(elapsed * 2.5) * 0.04;
        const dScrap = Math.hypot(traveller.position.x - scrapEntry.x, traveller.position.z - scrapEntry.z);
        if (dScrap < 0.72) tryCollectScrap();
      }

      if (weather) weather.update(dt, elapsed);

      // Update traveller lantern + Night Ground Light Pools (ui_04!)
      const lp = traveller.lanternWorldPos;
      lights.setAccentPosition(lp.x, lp.y + 0.45, lp.z);
      const pools = [{ x: lp.x, y: traveller.position.y + 0.15, z: lp.z, strength: 1.05 }];
      for (let i = 0; i < lightPoolSources.length && pools.length < 6; i++) {
        pools.push(lightPoolSources[i]);
      }
      setGroundLightPools(pools, 2.75, lights.nightMix * 0.95);

      const mode = VIEW_MODES[viewIdx];
      const aspectBoost = camera.aspect < 0.9 ? Math.min(1.55, 0.92 / Math.max(0.45, camera.aspect)) : 1;
      let dist = 8.4 * aspectBoost * zoomFactor;
      let height = 5.2 * aspectBoost * zoomFactor;
      let lookY = 0.45;
      let focusX = traveller.position.x;
      let focusZ = traveller.position.z;

      if (mode === 'macro') {
        dist = 4.6 * aspectBoost * zoomFactor;
        height = 2.5 * aspectBoost * zoomFactor;
        lookY = 0.55;
      } else if (mode === 'overview') {
        dist = 13.8 * aspectBoost * zoomFactor;
        height = 10.4 * aspectBoost * zoomFactor;
        lookY = 0.2;
        focusX = 0;
        focusZ = 0;
      }

      const desiredX = focusX + Math.sin(cameraYaw) * dist;
      const desiredZ = focusZ + Math.cos(cameraYaw) * dist;
      const desiredY = height;
      const k = 1 - Math.exp(-6.5 * dt);

      camera.position.x += (desiredX - camera.position.x) * k;
      camera.position.y += (desiredY - camera.position.y) * k;
      camera.position.z += (desiredZ - camera.position.z) * k;
      camera.lookAt(focusX, lookY, focusZ);
    },
  };
}
