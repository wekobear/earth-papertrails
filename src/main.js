import * as THREE from 'three';
import './style.css';
import { BOOKS, NEW_BOOK_TEMPLATE } from './data/footprints.js';
import { collectStamp, getAllBooks, loadProgress, markSceneVisited } from './core/storage.js';
import { createPaperMaterialFactory } from './render/paperMaterial.js';
import { createLights } from './render/lights.js';
import { createPost } from './render/post.js';
import { createPaperAudio } from './audio/paperAudio.js';
import { createBookshelfStage } from './stages/bookshelfStage.js';
import { createBookStage } from './stages/bookStage.js';
import { createWorldStage } from './stages/worldStage.js';
import { createHud } from './ui/hud.js';

const canvas = document.getElementById('stage');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
const maxPixelRatio = () => (window.innerWidth < 768 ? 1.5 : 2);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio()));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(36, window.innerWidth / Math.max(1, window.innerHeight), 0.1, 100);

const materials = createPaperMaterialFactory();
const lights = createLights({ scene, glowMaterials: materials.glowMaterials });
const post = createPost({ renderer, scene, camera });
const audio = createPaperAudio();
const progress = loadProgress();

let activeStageName = 'bookshelf';
let currentBook = BOOKS[0];
let currentScene = BOOKS[0].scenes[0];
let currentSceneIdx = 0;
let transitioning = false;

function getShelfBooks() {
  return [...getAllBooks(BOOKS, progress), NEW_BOOK_TEMPLATE];
}

const hud = createHud({
  progress,
  onNavigateStage(target) {
    if (target === 'bookshelf') enterBookshelf();
    else if (target === 'book') enterBook(currentBook, currentSceneIdx);
  },
  onToggleDayNight() {
    const night = lights.toggleNight();
    hud.setDayNightState(night);
  },
  onToggleAudio() {
    const muted = audio.toggleMute();
    hud.setAudioMuted(muted);
  },
  onPrevPage() {
    bookStage.prevPage();
  },
  onNextPage() {
    bookStage.nextPage();
  },
  onGoToPage(idx) {
    bookStage.goToPage(idx);
  },
  onEnterWorld() {
    const sc = bookStage.currentScene || currentScene;
    enterWorld(sc);
  },
  onBackToBook() {
    enterBook(currentBook, currentSceneIdx);
  },
  onCycleView() {
    const label = worldStage.cycleView();
    hud.setViewLabel(label);
  },
  onSelectSpotChip(spot) {
    worldStage.focusSpot(spot);
    hud.openSpotDrawer(currentScene, spot);
  },
  onCollectStamp(sc, spot, { date, note }) {
    const saved = collectStamp(progress, sc.id, spot.id, { date, note });
    audio.playStamp();
    worldStage.refreshSpotVisuals();
    hud.markSpotCollected(sc, spot, saved);
    if (activeStageName === 'book') {
      hud.setBookSpread(currentBook, currentScene, currentSceneIdx);
    }
  },
  onJumpToScene(book, sc) {
    const idx = book.scenes.findIndex((s) => s.id === sc.id);
    currentBook = book;
    currentScene = sc;
    currentSceneIdx = Math.max(0, idx);
    enterWorld(sc);
  },
  onBookCreated(newBook) {
    const list = getShelfBooks();
    bookshelfStage.setBooks(list);
    hud.setMobileShelfBooks(list);
    if (newBook) {
      enterBook(newBook, 0);
    }
  },
  onOpenTooltipBook() {
    bookshelfStage.openHoveredBook();
  },
  onSelectMobileBook(idx, isSame) {
    const list = getShelfBooks();
    const book = list[idx];
    if (!book) return;
    if (book.isCreator) {
      hud.openCreator();
      return;
    }
    if (isSame) {
      bookshelfStage.openHoveredBook();
    } else {
      bookshelfStage.previewBookByIndex(idx, camera, canvas);
    }
  },
  onJoystickMove(jx, jz) {
    worldStage.setJoystickInput(jx, jz);
  },
});

const bookshelfStage = createBookshelfStage({
  materials,
  audio,
  progress,
  onHoverBook(book, count, screenPos) {
    hud.setTooltip(book, count, screenPos);
  },
  onSelectBook(book) {
    enterBook(book, 0);
  },
  onCreateBook() {
    hud.openCreator();
  },
  onOpenPassport() {
    hud.openPassport();
  },
  onToggleNight() {
    const night = lights.toggleNight();
    hud.setDayNightState(night);
  },
});
const initialShelfBooks = getShelfBooks();
bookshelfStage.setBooks(initialShelfBooks);
hud.setMobileShelfBooks(initialShelfBooks);

const bookStage = createBookStage({
  materials,
  audio,
  onSceneChange(sc, idx) {
    currentScene = sc;
    currentSceneIdx = idx;
    hud.setBookSpread(currentBook, sc, idx);
    lights.setNight(!!sc.defaultNight, false);
    hud.setDayNightState(lights.isNight);
  },
  onEnterScene(sc) {
    enterWorld(sc);
  },
});

const worldStage = createWorldStage({
  materials,
  audio,
  progress,
  onOpenSpot(spot) {
    hud.openSpotDrawer(currentScene, spot);
  },
  onCollectScrap(sc, keepsake) {
    hud.refreshScrapUI(sc, keepsake);
    hud.showToast(`拾取到压花纪念：${keepsake.glyph} ${keepsake.name}`);
  },
  onRequestExit() {
    enterBook(currentBook, currentSceneIdx);
  },
});

scene.add(bookshelfStage.group, bookStage.group, worldStage.group);

function setVisibleStage(name) {
  bookshelfStage.group.visible = name === 'bookshelf';
  bookStage.group.visible = name === 'book';
  worldStage.group.visible = name === 'world';
}

function enterBookshelf() {
  if (transitioning) return;
  transitioning = true;
  hud.fadeTransition(() => {
    bookStage.leave();
    worldStage.leave();
    activeStageName = 'bookshelf';
    setVisibleStage('bookshelf');
    lights.setMode('bookshelf');
    lights.setNight(false, false);
    post.setMode('bookshelf');
    bookshelfStage.enter(camera);
    hud.setTooltip(null, 0, null);
    hud.setDayNightState(false);
    hud.setStage('bookshelf');
    transitioning = false;
  });
}

function enterBook(book, sceneIdx = 0) {
  if (transitioning) return;
  transitioning = true;
  currentBook = book;
  currentSceneIdx = sceneIdx;
  currentScene = book.scenes[sceneIdx] || book.scenes[0];

  hud.fadeTransition(() => {
    bookshelfStage.leave();
    worldStage.leave();
    activeStageName = 'book';
    setVisibleStage('book');
    lights.setMode('book');
    lights.setNight(!!currentScene.defaultNight, false);
    post.setMode('book');
    bookStage.enter(book, sceneIdx, camera);
    hud.setDayNightState(lights.isNight);
    hud.setStage('book', { book: currentBook, scene: currentScene });
    hud.setBookSpread(currentBook, currentScene, currentSceneIdx);
    transitioning = false;
  });
}

function enterWorld(targetScene) {
  if (transitioning) return;
  transitioning = true;
  currentScene = targetScene;
  markSceneVisited(progress, targetScene.id);

  hud.fadeTransition(() => {
    bookshelfStage.leave();
    bookStage.leave();
    activeStageName = 'world';
    setVisibleStage('world');
    lights.setMode('world');
    lights.setNight(!!targetScene.defaultNight, false);
    post.setMode('world');
    worldStage.enter(targetScene, camera);
    hud.setDayNightState(lights.isNight);
    hud.setViewLabel(worldStage.currentViewLabel);
    hud.setStage('world', { book: currentBook, scene: targetScene });
    transitioning = false;
  });
}

setVisibleStage('bookshelf');
lights.setMode('bookshelf');
lights.setNight(false, true);
post.setMode('bookshelf');
bookshelfStage.enter(camera);
hud.setStage('bookshelf');

function unlockAudio() {
  audio.unlock();
}

canvas.addEventListener('pointerdown', (e) => {
  unlockAudio();
  if (activeStageName === 'bookshelf') bookshelfStage.onPointerDown(e, canvas, camera);
  else if (activeStageName === 'book') bookStage.onPointerDown(e, canvas, camera);
  else worldStage.onPointerDown(e, canvas, camera);
});

window.addEventListener('pointermove', (e) => {
  const onCanvas = e.target === canvas;
  if (activeStageName === 'bookshelf') {
    if (onCanvas) bookshelfStage.onPointerMove(e, canvas, camera);
  } else if (activeStageName === 'book') {
    bookStage.onPointerMove(e, canvas, camera);
  } else {
    if (onCanvas) worldStage.onPointerMove(e, canvas, camera);
  }
});

window.addEventListener('pointerup', (e) => {
  if (activeStageName === 'bookshelf') bookshelfStage.onPointerUp(e, canvas, camera);
  else if (activeStageName === 'book') bookStage.onPointerUp(e, canvas, camera);
  else if (activeStageName === 'world') worldStage.onPointerUp(e);
});

window.addEventListener('pointercancel', (e) => {
  if (activeStageName === 'bookshelf') bookshelfStage.onPointerUp(e, canvas, camera);
  else if (activeStageName === 'book') bookStage.onPointerUp(e, canvas, camera);
  else if (activeStageName === 'world') worldStage.onPointerUp(e);
});

canvas.addEventListener('wheel', (e) => {
  if (activeStageName === 'book') {
    e.preventDefault();
    bookStage.onWheel(e);
  }
}, { passive: false });

canvas.addEventListener('contextmenu', (e) => e.preventDefault());

window.addEventListener('keydown', (e) => {
  unlockAudio();
  const tag = document.activeElement?.tagName;
  const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if (!typing) {
    if (e.code === 'KeyN') {
      const night = lights.toggleNight();
      hud.setDayNightState(night);
      return;
    }
    if (e.code === 'KeyM') {
      const muted = audio.toggleMute();
      hud.setAudioMuted(muted);
      return;
    }
  }

  if (activeStageName === 'book' && !typing) {
    if (e.code === 'ArrowLeft') bookStage.prevPage();
    else if (e.code === 'ArrowRight') bookStage.nextPage();
    else if (e.code === 'Enter') enterWorld(bookStage.currentScene || currentScene);
    else if (e.code === 'Escape') enterBookshelf();
  } else if (activeStageName === 'world') {
    if (!typing && e.code === 'KeyV') {
      hud.setViewLabel(worldStage.cycleView());
    }
    worldStage.onKeyDown(e);
  }
});

window.addEventListener('keyup', (e) => {
  if (activeStageName === 'world') worldStage.onKeyUp(e);
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = Math.max(1, window.innerHeight);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxPixelRatio()));
  renderer.setSize(w, h, false);
});

let lastTime = performance.now();
let elapsed = 0;

function tick(now) {
  requestAnimationFrame(tick);
  const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
  lastTime = now;
  elapsed += dt;

  if (activeStageName === 'bookshelf') {
    bookshelfStage.update(dt, elapsed, camera, lights);
  } else if (activeStageName === 'book') {
    bookStage.update(dt, elapsed, camera, lights);
  } else {
    worldStage.update(dt, elapsed, camera, lights);
  }

  lights.update(dt);
  post.render(dt, lights.exposure);
}

requestAnimationFrame(tick);
