import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';
import { addCutEdgeLines, createFloorArtTexture, createWallArtTexture } from '../render/paperMaterial.js';
import { buildPaperProp } from '../world/propKit.js';

// Accordion Star-Book 90-degree Carousel Pop-Up (matching ui_02_origami_book_flip.png & reference video)
export function createBookStage({ materials, audio, onSceneChange, onEnterScene }) {
  const group = new THREE.Group();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const shadowFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(24, 24),
    new THREE.ShadowMaterial({ opacity: 0.16 }),
  );
  shadowFloor.rotation.x = -Math.PI / 2;
  shadowFloor.position.y = -0.02;
  shadowFloor.receiveShadow = true;
  group.add(shadowFloor);

  const W = 2.45;
  const H = 2.45;
  const THICK = 0.026;
  const FAN_STEP = 0.195; // Crisp accordion fan angle
  const GUARD_LEAVES = 3; // 3 decorative accordion guard leaves on BOTH left & right ends!

  let currentBook = null;
  let bookRoot = new THREE.Group();
  group.add(bookRoot);

  let leaves = [];
  let gussets = []; // All V-fold floor gussets (guard + story spreads)
  let storySpreads = [];
  let targetPage = 0;
  let pagePos = 0;
  let pageVel = 0;
  let reportedIndex = 0;
  let active = false;

  let dragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartPage = 0;
  let didDragFlip = false;

  function computeLeafAngle(leafIdx, cursor, numSpreads) {
    // Active spread `cursor` maps to leaf `activeLeft = GUARD_LEAVES + cursor`
    const c = Math.max(0, Math.min(numSpreads - 1, cursor));
    const i = Math.floor(c);
    const f = c - i;

    const angleAt = (idx, storyIdx) => {
      const leftLeaf = GUARD_LEAVES + storyIdx;
      const rightLeaf = leftLeaf + 1;
      if (idx <= leftLeaf) return -Math.PI / 4 - (leftLeaf - idx) * FAN_STEP;
      return Math.PI / 4 + (idx - rightLeaf) * FAN_STEP;
    };

    const a0 = angleAt(leafIdx, i);
    const a1 = i + 1 < numSpreads ? angleAt(leafIdx, i + 1) : a0;
    const ease = f * f * (3 - 2 * f);
    return a0 + (a1 - a0) * ease;
  }

  function createRigidVFoldFloor(floorMat) {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(6 * 3);
    const uvs = new Float32Array([
      0, 0, 1, 0, 1, 1,
      0, 0, 1, 1, 0, 1,
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, floorMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const lineGeo = new THREE.BufferGeometry();
    const linePos = new Float32Array(5 * 2 * 3);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: PALETTE.indigoInk, transparent: true, opacity: 0.72 }),
    );
    lines.raycast = () => {};

    return { mesh, geo, positions, lines, lineGeo, linePos };
  }

  function updateVFoldFloor(floorObj, thetaL, thetaR) {
    const thetaMid = (thetaL + thetaR) * 0.5;
    const halfAlpha = (thetaR - thetaL) * 0.5;
    const phi = Math.max(0.015, Math.min(Math.PI / 4 - 1e-4, halfAlpha));

    const ax = W * Math.sin(thetaL);
    const az = W * Math.cos(thetaL);
    const bx = W * Math.sin(thetaR);
    const bz = W * Math.cos(thetaR);

    const r = W / Math.cos(phi);
    const tanPhi = Math.tan(phi);
    const h = W * Math.sqrt(Math.max(0, 1 - tanPhi * tanPhi));
    const cx = r * Math.sin(thetaMid);
    const cy = h;
    const cz = r * Math.cos(thetaMid);

    const p = floorObj.positions;
    p[0] = 0; p[1] = 0; p[2] = 0;
    p[3] = ax; p[4] = 0; p[5] = az;
    p[6] = cx; p[7] = cy; p[8] = cz;
    p[9] = 0; p[10] = 0; p[11] = 0;
    p[12] = cx; p[13] = cy; p[14] = cz;
    p[15] = bx; p[16] = 0; p[17] = bz;

    floorObj.geo.attributes.position.needsUpdate = true;
    floorObj.geo.computeVertexNormals();

    const lp = floorObj.linePos;
    lp[0] = 0; lp[1] = 0.004; lp[2] = 0; lp[3] = ax; lp[4] = 0.004; lp[5] = az;
    lp[6] = 0; lp[7] = 0.004; lp[8] = 0; lp[9] = bx; lp[10] = 0.004; lp[11] = bz;
    lp[12] = ax; lp[13] = 0.004; lp[14] = az; lp[15] = cx; lp[16] = cy + 0.004; lp[17] = cz;
    lp[18] = bx; lp[19] = 0.004; lp[20] = bz; lp[21] = cx; lp[22] = cy + 0.004; lp[23] = cz;
    lp[24] = 0; lp[25] = 0.004; lp[26] = 0; lp[27] = cx; lp[28] = cy + 0.004; lp[29] = cz;
    floorObj.lineGeo.attributes.position.needsUpdate = true;
  }

  function createBlankBorderWallTex() {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#f5ebd8';
    ctx.fillRect(0, 0, 256, 256);
    ctx.strokeStyle = PALETTE.indigoInk;
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, 236, 236);
    ctx.lineWidth = 1.4;
    ctx.strokeRect(20, 20, 216, 216);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  function buildBook(book, initialSceneIdx = 0) {
    currentBook = book;
    group.remove(bookRoot);
    bookRoot = new THREE.Group();
    group.add(bookRoot);

    leaves = [];
    gussets = [];
    storySpreads = [];

    const numSpreads = Math.max(1, book.scenes.length);
    const totalGapCount = numSpreads + GUARD_LEAVES * 2;
    const numLeaves = totalGapCount + 1;
    const plainLeafMat = materials.paper({ color: '#f5ebd8' });
    const guardWallTex = createBlankBorderWallTex();
    const guardWallMat = materials.paper({ map: guardWallTex, color: '#ffffff', vary: false });
    const guardFloorMat = materials.paper({ color: '#efe2c7', vary: false });

    // Central spine rod
    const spine = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.032, H + 0.04, 8),
      materials.paper({ color: PALETTE.indigoInk }),
    );
    spine.position.y = H / 2;
    spine.castShadow = true;
    bookRoot.add(spine);

    for (let k = 0; k < numLeaves; k++) {
      const leafGroup = new THREE.Group();
      const leftSpreadIdx = k - 1 - GUARD_LEAVES;
      const rightSpreadIdx = k - GUARD_LEAVES;
      const leftScene = leftSpreadIdx >= 0 && leftSpreadIdx < numSpreads ? book.scenes[leftSpreadIdx] : null;
      const rightScene = rightSpreadIdx >= 0 && rightSpreadIdx < numSpreads ? book.scenes[rightSpreadIdx] : null;

      const coreMesh = new THREE.Mesh(new THREE.BoxGeometry(THICK, H, W), plainLeafMat);
      coreMesh.position.set(0, H / 2, W / 2);
      coreMesh.castShadow = true;
      coreMesh.receiveShadow = true;
      addCutEdgeLines(coreMesh, PALETTE.indigoInk, 0.65, 22);
      leafGroup.add(coreMesh);

      const matL = rightScene
        ? materials.paper({ map: createWallArtTexture(rightScene, 'left'), color: '#ffffff', vary: false })
        : guardWallMat;
      const wallL = new THREE.Mesh(new THREE.PlaneGeometry(W, H), matL);
      wallL.position.set(THICK / 2 + 0.003, H / 2, W / 2);
      wallL.rotation.y = Math.PI / 2;
      wallL.receiveShadow = true;
      leafGroup.add(wallL);

      const matR = leftScene
        ? materials.paper({ map: createWallArtTexture(leftScene, 'right'), color: '#ffffff', vary: false })
        : guardWallMat;
      const wallR = new THREE.Mesh(new THREE.PlaneGeometry(W, H), matR);
      wallR.position.set(-THICK / 2 - 0.003, H / 2, W / 2);
      wallR.rotation.y = -Math.PI / 2;
      wallR.receiveShadow = true;
      leafGroup.add(wallR);

      bookRoot.add(leafGroup);
      leaves.push(leafGroup);
    }

    // Build all V-fold gussets (guard folds + story spreads)
    for (let g = 0; g < totalGapCount; g++) {
      const sIdx = g - GUARD_LEAVES;
      const sc = sIdx >= 0 && sIdx < numSpreads ? book.scenes[sIdx] : null;
      const floorMat = sc
        ? materials.paper({ map: createFloorArtTexture(sc, false), color: '#ffffff', vary: false })
        : guardFloorMat;

      const floorObj = createRigidVFoldFloor(floorMat);
      bookRoot.add(floorObj.mesh, floorObj.lines);
      gussets.push({ leftLeafIdx: g, rightLeafIdx: g + 1, floorObj });

      if (sc) {
        const propsPivot = new THREE.Group();
        bookRoot.add(propsPivot);
        const props = [];
        for (const spec of sc.bookProps) {
          const prop = buildPaperProp(spec.type, materials, {
            x: spec.x,
            z: spec.z,
            rot: spec.rot,
            scale: spec.scale,
          });
          propsPivot.add(prop.root);
          props.push(prop);
        }
        storySpreads.push({
          scene: sc,
          leftLeafIdx: g,
          rightLeafIdx: g + 1,
          floorObj,
          propsPivot,
          props,
        });
      }
    }

    targetPage = Math.max(0, Math.min(numSpreads - 1, initialSceneIdx));
    pagePos = targetPage;
    pageVel = 0;
    reportedIndex = targetPage;
    applyBookKinematics(0, 0);
  }

  function applyBookKinematics(dt, elapsed) {
    if (!currentBook) return;
    const numSpreads = Math.max(1, currentBook.scenes.length);

    const omega = 9.5;
    const zeta = 0.84;
    const acc = omega * omega * (targetPage - pagePos) - 2 * zeta * omega * pageVel;
    pageVel += acc * dt;
    pagePos += pageVel * dt;
    if (Math.abs(targetPage - pagePos) < 0.001 && Math.abs(pageVel) < 0.005) {
      pagePos = targetPage;
      pageVel = 0;
    }

    const clampedCursor = Math.max(-0.15, Math.min(numSpreads - 0.85, pagePos));
    for (let k = 0; k < leaves.length; k++) {
      leaves[k].rotation.y = computeLeafAngle(k, clampedCursor, numSpreads);
    }

    for (const g of gussets) {
      const thetaL = leaves[g.leftLeafIdx].rotation.y;
      const thetaR = leaves[g.rightLeafIdx].rotation.y;
      updateVFoldFloor(g.floorObj, thetaL, thetaR);
    }

    for (const sp of storySpreads) {
      const thetaL = leaves[sp.leftLeafIdx].rotation.y;
      const thetaR = leaves[sp.rightLeafIdx].rotation.y;
      const alpha = thetaR - thetaL;
      const thetaMid = (thetaL + thetaR) * 0.5;

      sp.propsPivot.rotation.y = thetaMid - Math.PI / 4;
      const ratio = alpha / (Math.PI / 2);
      const openT = Math.max(0, Math.min(1, (ratio - 0.32) / 0.62));
      const smoothOpen = openT * openT * (3 - 2 * openT);

      sp.propsPivot.visible = smoothOpen > 0.01;
      for (const prop of sp.props) {
        prop.setFoldImmediate(smoothOpen);
        prop.update(dt, elapsed);
      }
    }
  }

  function setPage(nextIdx) {
    if (!currentBook) return;
    const clamped = Math.max(0, Math.min(currentBook.scenes.length - 1, nextIdx));
    if (clamped !== targetPage) {
      targetPage = clamped;
      audio.playPageTurn();
      if (clamped !== reportedIndex) {
        reportedIndex = clamped;
        onSceneChange?.(currentBook.scenes[clamped], clamped);
      }
    }
  }

  function onPointerDown(e) {
    if (!active) return;
    dragging = true;
    didDragFlip = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartPage = targetPage;
  }

  function onPointerMove(e, dom, camera) {
    if (!active) return;
    const rect = dom.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    if (dragging) {
      const dx = e.clientX - dragStartX;
      if (Math.abs(dx) > 48 && !didDragFlip) {
        didDragFlip = true;
        setPage(dragStartPage + (dx < 0 ? 1 : -1));
      }
      dom.style.cursor = 'grabbing';
    } else {
      raycaster.setFromCamera(pointer, camera);
      const activeFloor = storySpreads[targetPage]?.floorObj?.mesh;
      const hits = activeFloor ? raycaster.intersectObject(activeFloor, false) : [];
      dom.style.cursor = hits.length > 0 ? 'pointer' : 'grab';
    }
  }

  function onPointerUp(e, dom, camera) {
    if (!active || !dragging) return;
    dragging = false;
    const dist = Math.hypot(e.clientX - dragStartX, e.clientY - dragStartY);
    if (dist < 8 && !didDragFlip) {
      const rect = dom.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const sp = storySpreads[targetPage];
      const targets = [
        sp?.floorObj?.mesh,
        sp ? leaves[sp.leftLeafIdx] : null,
        sp ? leaves[sp.rightLeafIdx] : null,
        sp?.propsPivot,
      ].filter(Boolean);
      const hits = raycaster.intersectObjects(targets, true);
      if (hits.length > 0) {
        audio.playFoldPop(1.2);
        onEnterScene?.(currentBook.scenes[targetPage]);
      }
    }
  }

  function onWheel(e) {
    if (!active) return;
    if (Math.abs(e.deltaY) > 22 || Math.abs(e.deltaX) > 22) {
      const dir = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) > 0 ? 1 : -1;
      setPage(targetPage + dir);
    }
  }

  return {
    group,
    get currentScene() {
      return currentBook?.scenes[targetPage] || null;
    },
    get currentIndex() {
      return targetPage;
    },
    enter(book, sceneIdx = 0, camera) {
      active = true;
      buildBook(book, sceneIdx);
      camera.fov = 34;
      const zDist = camera.aspect < 1.35 ? 6.8 + (1.35 - camera.aspect) * 3.8 : 6.8;
      camera.position.set(0, 5.0, zDist);
      camera.lookAt(0, 1.12, 0.35);
      camera.updateProjectionMatrix();
      onSceneChange?.(book.scenes[targetPage], targetPage);
    },
    leave() {
      active = false;
      dragging = false;
    },
    prevPage() {
      setPage(targetPage - 1);
    },
    nextPage() {
      setPage(targetPage + 1);
    },
    goToPage(idx) {
      setPage(idx);
    },
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onWheel,
    update(dt, elapsed, camera, lights) {
      applyBookKinematics(dt, elapsed);
      lights.setAccentPosition(0, 2.2, 1.4);
      camera.position.x += (Math.sin(elapsed * 0.4) * 0.08 - camera.position.x) * 0.05;
      camera.lookAt(0, 1.12, 0.35);
    },
  };
}
