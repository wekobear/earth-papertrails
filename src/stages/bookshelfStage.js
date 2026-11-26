import * as THREE from 'three';
import { PALETTE } from '../core/palette.js';
import {
  addCutEdgeLines,
  createBookCoverTexture,
  createBookSpineTexture,
  createWoodTexture,
} from '../render/paperMaterial.js';
import { countBookStamps } from '../core/storage.js';

export function createBookshelfStage({
  materials,
  audio,
  progress,
  onHoverBook,
  onSelectBook,
  onCreateBook,
  onOpenPassport,
  onToggleNight,
}) {
  const group = new THREE.Group();
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  const woodTex = createWoodTexture(false);
  const woodDarkTex = createWoodTexture(true);
  const woodMat = materials.paper({ map: woodTex, color: '#d8b796', fibre: 'world' });
  const woodDarkMat = materials.paper({ map: woodDarkTex, color: '#b58d6c', fibre: 'world' });
  const shelfBackMat = materials.paper({ map: woodDarkTex, color: '#8f694c', fibre: 'world' });

  // Warm study plaster wall behind the bookcase + sunlit window on left
  const wallMat = materials.paper({ color: '#e5d3bc', fibre: 'world' });
  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(26, 15), wallMat);
  backWall.position.set(0, 2.0, -1.7);
  backWall.receiveShadow = true;
  group.add(backWall);

  // Sunlit left window frame (matching ui_01_study_bookshelf.png)
  const winGroup = new THREE.Group();
  winGroup.position.set(-5.6, 2.2, -1.2);
  const winGlow = materials.paper({
    color: '#fff4dc',
    emissive: '#ffd590',
    emissiveIntensity: 0.72,
    glowTag: true,
  });
  const winGlass = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 5.4), winGlow);
  winGroup.add(winGlass);
  const winFrame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 5.5, 0.25), woodMat);
  winFrame.position.set(1.1, 0, 0.08);
  const winBar = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.14, 0.22), woodMat);
  winBar.position.set(0, 0.65, 0.08);
  winGroup.add(winFrame, winBar);
  group.add(winGroup);

  const cabinet = new THREE.Group();
  group.add(cabinet);

  function addBox(w, h, d, mat, pos, parent = cabinet, edge = true) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(pos[0], pos[1], pos[2]);
    m.castShadow = true;
    m.receiveShadow = true;
    if (edge) addCutEdgeLines(m, PALETTE.umber, 0.28, 25);
    parent.add(m);
    return m;
  }

  // Asymmetric 2-column walnut bookcase (Left main bay x ∈ [-3.2, 1.8], Right cubby bay x ∈ [1.8, 4.35])
  addBox(7.9, 6.6, 0.14, shelfBackMat, [0.55, 1.85, -1.25]); // back board
  addBox(0.24, 6.7, 1.5, woodDarkMat, [-3.35, 1.85, -0.55]); // outer left post
  addBox(0.24, 6.7, 1.5, woodDarkMat, [1.85, 1.85, -0.55]);  // center divider post
  addBox(0.24, 6.7, 1.5, woodDarkMat, [4.45, 1.85, -0.55]);  // outer right post

  addBox(8.2, 0.22, 1.62, woodDarkMat, [0.55, 5.15, -0.5]);  // top cornice
  addBox(5.1, 0.2, 1.5, woodMat, [-0.75, 2.95, -0.54]);      // left bay top shelf
  addBox(5.1, 0.22, 1.55, woodMat, [-0.75, 0.72, -0.52]);    // left bay hero book shelf
  addBox(5.1, 0.24, 1.6, woodDarkMat, [-0.75, -1.35, -0.5]); // left bay bottom shelf

  addBox(2.55, 0.2, 1.5, woodMat, [3.15, 1.95, -0.54]);      // right cubby mid shelf (fern above, lamp below)
  addBox(2.55, 0.24, 1.6, woodDarkMat, [3.15, -1.35, -0.5]); // right cubby bottom shelf

  // Top Left Bay: Faceted Paper Earth Globe + 2 Turned-Wood Rubber Stamps (clickable -> Passport!)
  const interactiveProps = [];

  const globeGroup = new THREE.Group();
  globeGroup.position.set(-1.95, 3.05, -0.42);
  addBox(0.56, 0.09, 0.56, woodDarkMat, [0, 0.045, 0], globeGroup);
  const globeCradle = new THREE.Mesh(
    new THREE.TorusGeometry(0.6, 0.04, 6, 16, Math.PI * 1.15),
    woodMat,
  );
  globeCradle.position.set(0, 0.72, 0);
  globeCradle.rotation.z = -Math.PI * 0.65;
  globeGroup.add(globeCradle);

  const earthSphere = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.54, 1),
    materials.paper({ color: PALETTE.teal }),
  );
  earthSphere.position.set(0, 0.74, 0);
  earthSphere.castShadow = true;
  addCutEdgeLines(earthSphere, PALETTE.cutEdge, 0.35, 15);
  const landPatchA = new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 0), materials.paper({ color: PALETTE.sage }));
  landPatchA.scale.set(0.98, 0.62, 0.72);
  landPatchA.rotation.set(0.45, 0.7, 0.2);
  const landPatchB = new THREE.Mesh(new THREE.DodecahedronGeometry(0.545, 0), materials.paper({ color: PALETTE.paper }));
  landPatchB.scale.set(0.65, 0.88, 0.55);
  landPatchB.rotation.set(-0.5, -0.8, 0.3);
  earthSphere.add(landPatchA, landPatchB);
  globeGroup.add(earthSphere);

  const globeHit = new THREE.Mesh(new THREE.SphereGeometry(0.68, 8, 8), new THREE.MeshBasicMaterial({ visible: false }));
  globeHit.position.set(0, 0.74, 0);
  globeHit.userData.action = 'passport';
  globeGroup.add(globeHit);
  interactiveProps.push(globeHit);
  cabinet.add(globeGroup);

  // Two turned-wood rubber stamps on top shelf right
  for (const [sx, sz, col] of [[0.35, -0.45, PALETTE.terracotta], [0.95, -0.35, PALETTE.pine]]) {
    const stampG = new THREE.Group();
    stampG.position.set(sx, 3.05, sz);
    addBox(0.44, 0.1, 0.44, woodMat, [0, 0.1, 0], stampG);
    addBox(0.44, 0.04, 0.44, materials.paper({ color: col }), [0, 0.03, 0], stampG, false);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.42, 8), woodMat);
    handle.position.set(0, 0.35, 0);
    handle.castShadow = true;
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), woodMat);
    knob.position.set(0, 0.56, 0);
    knob.castShadow = true;
    const hit = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.65, 0.5), new THREE.MeshBasicMaterial({ visible: false }));
    hit.position.set(0, 0.32, 0);
    hit.userData.action = 'passport';
    interactiveProps.push(hit);
    stampG.add(handle, knob, hit);
    cabinet.add(stampG);
  }

  // Right Upper Cubby: Faceted Origami Ceramic Pot + Layered Die-Cut Fern
  const potGroup = new THREE.Group();
  potGroup.position.set(3.12, 2.05, -0.42);
  const pot = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.28, 0.52, 6),
    materials.paper({ color: '#d7cfc2' }),
  );
  pot.position.y = 0.26;
  pot.castShadow = true;
  addCutEdgeLines(pot, PALETTE.ink, 0.3, 20);
  potGroup.add(pot);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const frond = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.72, 0.025),
      materials.paper({ color: i % 2 === 0 ? PALETTE.pine : PALETTE.sage }),
    );
    frond.position.set(Math.cos(a) * 0.2, 0.74, Math.sin(a) * 0.2);
    frond.rotation.set(0.42 * Math.sin(a), a, 0.42 * Math.cos(a));
    frond.castShadow = true;
    addCutEdgeLines(frond, PALETTE.cutEdge, 0.35);
    potGroup.add(frond);
  }
  cabinet.add(potGroup);

  // Right Lower Cubby: Pleated Origami Glowing Paper Desk Lamp (clickable -> Day/Night!) + Journals
  const lampGroup = new THREE.Group();
  lampGroup.position.set(3.15, -1.23, -0.25);
  addBox(0.68, 0.08, 0.68, woodDarkMat, [0, 0.04, 0], lampGroup);
  const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.14, 0.68, 5), materials.paper({ color: PALETTE.kraft }));
  lampStem.position.set(0, 0.38, 0);
  lampStem.castShadow = true;
  addCutEdgeLines(lampStem, PALETTE.ink, 0.35);
  const lampShade = new THREE.Mesh(
    new THREE.ConeGeometry(0.56, 0.55, 8),
    materials.paper({ color: PALETTE.lantern, emissive: PALETTE.lantern, emissiveIntensity: 0.95, glowTag: true }),
  );
  lampShade.position.set(0, 0.92, 0);
  lampShade.castShadow = true;
  addCutEdgeLines(lampShade, PALETTE.ink, 0.35, 12);
  const lampHit = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.35, 1.1), new THREE.MeshBasicMaterial({ visible: false }));
  lampHit.position.set(0, 0.65, 0);
  lampHit.userData.action = 'daynight';
  interactiveProps.push(lampHit);
  lampGroup.add(lampStem, lampShade, lampHit);
  cabinet.add(lampGroup);

  // Stacked notebooks in bottom cubbies
  addBox(0.95, 0.14, 0.75, materials.paper({ color: PALETTE.ochre }), [2.35, -1.16, -0.32], cabinet);
  addBox(0.9, 0.13, 0.72, materials.paper({ color: PALETTE.kraft }), [3.9, -1.16, -0.32], cabinet);
  addBox(0.9, 0.13, 0.72, materials.paper({ color: PALETTE.paper }), [3.9, -1.02, -0.32], cabinet);
  // Bottom left tucked journals
  for (let i = 0; i < 4; i++) {
    addBox(0.24, 1.32, 0.95, materials.paper({ color: i % 2 ? PALETTE.kraft : '#9a7b5c' }), [-2.5 + i * 0.28, -0.58, -0.4], cabinet);
  }

  // Hero Books Container (rebuilt dynamically when custom books are added)
  const booksContainer = new THREE.Group();
  cabinet.add(booksContainer);

  let bookSlots = [];
  let hitMeshes = [];
  let currentBooks = [];
  let hoveredIdx = -1;
  let pullingIdx = -1;
  let mouseX = 0;
  let mouseY = 0;
  let active = false;

  const projVec = new THREE.Vector3();

  function setBooks(booksList) {
    currentBooks = booksList;
    while (booksContainer.children.length > 0) {
      booksContainer.remove(booksContainer.children[0]);
    }
    bookSlots = [];
    hitMeshes = [];

    const n = booksList.length;
    const totalSpan = Math.min(4.45, Math.max(3.6, n * 0.88));
    const spacing = totalSpan / Math.max(1, n - 1);
    const startX = -0.75 - totalSpan / 2;

    booksList.forEach((book, idx) => {
      const slot = new THREE.Group();
      const basePos = new THREE.Vector3(startX + idx * spacing, 0.83, -0.45);
      slot.position.copy(basePos);

      const spineTex = createBookSpineTexture(book);
      const coverTex = createBookCoverTexture(book);
      const spineMat = materials.paper({ map: spineTex, color: '#ffffff' });
      const coverMat = materials.paper({ map: coverTex, color: '#ffffff' });
      const pageBlockMat = materials.paper({ color: PALETTE.cutEdge });
      const ribbonMat = materials.paper({ color: book.ribbonColor || PALETTE.terracotta });

      const bt = 0.42; // thick spine width facing front!
      const bh = 1.72;
      const bw = 1.18; // depth into shelf

      const pivot = new THREE.Group();
      slot.add(pivot);

      // Book faces forward with SPINE toward camera (+Z), front cover on right (+X)
      const spineMesh = addBox(bt, bh, 0.05, spineMat, [0, bh / 2, bw / 2], pivot, true);
      const frontCover = addBox(0.05, bh, bw, coverMat, [bt / 2 - 0.015, bh / 2, 0], pivot, true);
      addBox(0.05, bh, bw, materials.paper({ color: book.spineColor }), [-bt / 2 + 0.015, bh / 2, 0], pivot, true);
      addBox(bt - 0.09, bh - 0.08, bw - 0.06, pageBlockMat, [0, bh / 2, 0], pivot, true);

      // Bookmark ribbon dangling gently below shelf lip
      if (!book.isCreator) {
        addBox(0.075, 0.34, 0.014, ribbonMat, [0, -0.1, bw / 2 - 0.03], pivot, false);
      }

      spineMesh.userData.bookIndex = idx;
      frontCover.userData.bookIndex = idx;
      hitMeshes.push(spineMesh, frontCover);

      booksContainer.add(slot);
      bookSlots.push({
        book,
        idx,
        slot,
        pivot,
        basePos,
        hoverT: 0,
        pullT: 0,
      });
    });
  }

  function getScreenPosForSlot(slotObj, camera, dom) {
    projVec.copy(slotObj.slot.position);
    projVec.y += 0.9;
    projVec.z += 0.65;
    projVec.project(camera);
    const rect = dom.getBoundingClientRect();
    return {
      x: (projVec.x * 0.5 + 0.5) * rect.width,
      y: (-projVec.y * 0.5 + 0.5) * rect.height,
    };
  }

  function updateRaycast(camera, dom) {
    if (!active || pullingIdx !== -1) return;
    raycaster.setFromCamera(pointer, camera);

    const bookHits = raycaster.intersectObjects(hitMeshes, false);
    const nextIdx = bookHits.length > 0 ? bookHits[0].object.userData.bookIndex : -1;
    if (nextIdx !== hoveredIdx) {
      hoveredIdx = nextIdx;
      if (nextIdx !== -1) {
        audio.playHover();
        const b = currentBooks[nextIdx];
        const screenPos = dom ? getScreenPosForSlot(bookSlots[nextIdx], camera, dom) : null;
        onHoverBook?.(b, countBookStamps(progress, b), screenPos);
      } else {
        onHoverBook?.(null, 0, null);
      }
    } else if (hoveredIdx !== -1 && dom) {
      const b = currentBooks[hoveredIdx];
      const screenPos = getScreenPosForSlot(bookSlots[hoveredIdx], camera, dom);
      onHoverBook?.(b, countBookStamps(progress, b), screenPos);
    }

    const propHits = raycaster.intersectObjects(interactiveProps, false);
    dom.style.cursor = nextIdx !== -1 || propHits.length > 0 ? 'pointer' : 'default';
  }

  function onPointerMove(e, dom, camera) {
    if (!active) return;
    const rect = dom.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseX = pointer.x;
    mouseY = pointer.y;
    updateRaycast(camera, dom);
  }

  function onPointerDown(e, dom, camera) {
    if (!active || pullingIdx !== -1) return;
    const rect = dom.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    updateRaycast(camera, dom);

    if (hoveredIdx !== -1) {
      const picked = currentBooks[hoveredIdx];
      if (picked.isCreator) {
        audio.playBookPull();
        onCreateBook?.();
        return;
      }
      pullingIdx = hoveredIdx;
      audio.playBookPull();
      setTimeout(() => {
        onSelectBook?.(picked);
      }, 420);
      return;
    }

    raycaster.setFromCamera(pointer, camera);
    const propHits = raycaster.intersectObjects(interactiveProps, false);
    if (propHits.length > 0) {
      const act = propHits[0].object.userData.action;
      if (act === 'passport') {
        audio.playHover();
        onOpenPassport?.();
      } else if (act === 'daynight') {
        audio.playHover();
        onToggleNight?.();
      }
    }
  }

  return {
    group,
    setBooks,
    enter(camera) {
      active = true;
      hoveredIdx = -1;
      pullingIdx = -1;
      for (const s of bookSlots) {
        s.hoverT = 0;
        s.pullT = 0;
        s.slot.position.copy(s.basePos);
        s.slot.rotation.set(0, 0, 0);
      }
      camera.fov = 38;
      const distZ = camera.aspect < 1.4 ? 8.9 + (1.4 - camera.aspect) * 6.2 : 8.9;
      camera.position.set(0.35, 1.75, distZ);
      camera.lookAt(0.35, 1.68, 0);
      camera.updateProjectionMatrix();
    },
    leave() {
      active = false;
      hoveredIdx = -1;
      pullingIdx = -1;
    },
    onPointerMove,
    onPointerDown,
    update(dt, elapsed, camera, lights) {
      earthSphere.rotation.y = elapsed * 0.24;
      lights.setAccentPosition(3.15, -0.2, 0.4);

      const baseZ = camera.aspect < 1.4 ? 8.9 + (1.4 - camera.aspect) * 6.2 : 8.9;
      const targetCamX = 0.35 + mouseX * 0.28;
      const targetCamY = 1.75 + mouseY * 0.14;
      camera.position.x += (targetCamX - camera.position.x) * (1 - Math.exp(-5 * dt));
      camera.position.y += (targetCamY - camera.position.y) * (1 - Math.exp(-5 * dt));
      camera.position.z += (baseZ - camera.position.z) * (1 - Math.exp(-5 * dt));
      camera.lookAt(0.35, 1.68, 0);

      for (const s of bookSlots) {
        const isHovered = s.idx === hoveredIdx;
        const isPulling = s.idx === pullingIdx;
        s.hoverT += ((isHovered ? 1 : 0) - s.hoverT) * (1 - Math.exp(-12 * dt));
        if (isPulling) s.pullT = Math.min(1, s.pullT + dt * 2.5);

        const p = s.pullT * s.pullT * (3 - 2 * s.pullT);
        s.slot.position.set(
          s.basePos.x * (1 - p) + p * 0.35,
          s.basePos.y + s.hoverT * 0.08 + p * 0.55,
          s.basePos.z + s.hoverT * 0.52 + p * 2.9,
        );
        // Tilt forward & slightly angled so front cover peeks out invitingly like ui_01_study_bookshelf.png!
        s.slot.rotation.x = s.hoverT * 0.18 + p * 0.14;
        s.slot.rotation.y = -s.hoverT * 0.34 - p * 0.22;
      }
    },
  };
}
