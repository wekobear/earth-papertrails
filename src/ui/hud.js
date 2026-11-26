import { BOOKS, CUSTOM_BIOME_TEMPLATES } from '../data/footprints.js';
import {
  addCustomBook,
  countBookStamps,
  countTotalStamps,
  exportProgressJSON,
  getAllBooks,
  getStamp,
  hasScrap,
  importProgressJSON,
  saveSpotPhoto,
} from '../core/storage.js';
import { createScenePolaroidFallback } from '../render/paperMaterial.js';

const KEEPSAKE_SVGS = {
  ginkgo: `<svg viewBox="0 0 64 64" width="54" height="54"><path d="M32 54 L32 34 C16 32 8 18 14 10 C22 14 27 12 32 16 C37 12 42 14 50 10 C56 18 48 32 32 34 Z" fill="#d9a441" stroke="#5a3a28" stroke-width="2"/></svg>`,
  sakura: `<svg viewBox="0 0 64 64" width="54" height="54"><g fill="#e39f95" stroke="#5a3a28" stroke-width="1.8"><circle cx="32" cy="18" r="9"/><circle cx="45" cy="28" r="9"/><circle cx="40" cy="44" r="9"/><circle cx="24" cy="44" r="9"/><circle cx="19" cy="28" r="9"/></g><circle cx="32" cy="32" r="5" fill="#ffc45a"/></svg>`,
  snowflake: `<svg viewBox="0 0 64 64" width="54" height="54" stroke="#4f6b8a" stroke-width="2.5" stroke-linecap="round"><path d="M32 8v48M11 20l42 24M53 20L11 44"/><circle cx="32" cy="32" r="5" fill="#fbf6ea"/></svg>`,
  shell: `<svg viewBox="0 0 64 64" width="54" height="54"><path d="M12 38 C12 18 52 18 52 38 L42 50 L22 50 Z" fill="#e8c8a2" stroke="#5a3a28" stroke-width="2"/><path d="M32 22v28M22 25l6 25M42 25l-6 25" stroke="#5a3a28" stroke-width="1.4"/></svg>`,
  leaf: `<svg viewBox="0 0 64 64" width="54" height="54"><path d="M16 48 C18 22 36 12 52 12 C50 32 38 46 16 48 Z" fill="#8e9a5b" stroke="#5a3a28" stroke-width="2"/><path d="M14 50 L48 16" stroke="#5a3a28" stroke-width="1.8"/></svg>`,
  star: `<svg viewBox="0 0 64 64" width="54" height="54"><polygon points="32,8 39,23 56,25 43,36 47,53 32,45 17,53 21,36 8,25 25,23" fill="#ffc45a" stroke="#5a3a28" stroke-width="2"/></svg>`,
};

export function createHud({
  progress,
  onNavigateStage,
  onToggleDayNight,
  onToggleAudio,
  onPrevPage,
  onNextPage,
  onGoToPage,
  onEnterWorld,
  onBackToBook,
  onCycleView,
  onSelectSpotChip,
  onCollectStamp,
  onJumpToScene,
  onBookCreated,
}) {
  const el = {
    breadcrumbs: document.getElementById('breadcrumbs'),
    sepBook: document.getElementById('sep-book'),
    crumbBook: document.getElementById('crumb-book'),
    crumbBookTitle: document.getElementById('crumb-book-title'),
    sepWorld: document.getElementById('sep-world'),
    crumbWorldTitle: document.getElementById('crumb-world-title'),
    passportCount: document.getElementById('passport-count'),
    btnPassport: document.getElementById('btn-passport'),
    btnDayNight: document.getElementById('btn-daynight'),
    dayNightIcon: document.getElementById('daynight-icon'),
    btnAudio: document.getElementById('btn-audio'),
    audioIcon: document.getElementById('audio-icon'),

    uiBookshelf: document.getElementById('ui-bookshelf'),
    tooltip: document.getElementById('book-tooltip'),
    tooltipTitle: document.getElementById('tooltip-title'),
    tooltipSub: document.getElementById('tooltip-sub'),

    uiBook: document.getElementById('ui-book'),
    btnPrevPage: document.getElementById('btn-prev-page'),
    btnNextPage: document.getElementById('btn-next-page'),
    bookDots: document.getElementById('book-dots'),
    sceneCaption: document.getElementById('scene-caption'),
    sceneMeta: document.getElementById('scene-meta'),
    btnEnterWorld: document.getElementById('btn-enter-world'),

    uiWorld: document.getElementById('ui-world'),
    worldCoords: document.getElementById('world-coords'),
    worldName: document.getElementById('world-name'),
    worldSpotsPills: document.getElementById('world-spots-pills'),
    worldScrapStatus: document.getElementById('world-scrap-status'),
    btnBackBook: document.getElementById('btn-back-book'),
    btnCameraView: document.getElementById('btn-camera-view'),

    drawer: document.getElementById('postcard-drawer'),
    btnCloseDrawer: document.getElementById('btn-close-drawer'),
    cardCoords: document.getElementById('card-coords'),
    cardSeal: document.getElementById('card-seal'),
    cardGlyphSvg: document.getElementById('card-glyph-svg'),
    cardTitle: document.getElementById('card-title'),
    cardStory: document.getElementById('card-story'),
    diaryDate: document.getElementById('diary-date'),
    diaryNote: document.getElementById('diary-note'),
    polaroidImg: document.getElementById('polaroid-img'),
    polaroidLabel: document.getElementById('polaroid-label'),
    polaroidUpload: document.getElementById('polaroid-upload'),
    keepsakeSlot: document.getElementById('keepsake-slot'),
    keepsakeArt: document.getElementById('keepsake-art'),
    keepsakeName: document.getElementById('keepsake-name'),
    btnCollectStamp: document.getElementById('btn-collect-stamp'),
    stampStatus: document.getElementById('stamp-status'),

    passportModal: document.getElementById('passport-modal'),
    btnClosePassport: document.getElementById('btn-close-passport'),
    modalTotalStamps: document.getElementById('modal-total-stamps'),
    passportGrid: document.getElementById('passport-grid'),
    btnExportJson: document.getElementById('btn-export-json'),
    inputImportJson: document.getElementById('input-import-json'),
    btnOpenCreator: document.getElementById('btn-open-creator'),

    creatorModal: document.getElementById('creator-modal'),
    btnCloseCreator: document.getElementById('btn-close-creator'),
    creatorForm: document.getElementById('creator-form'),
    colorSwatches: document.getElementById('color-swatches'),

    toast: document.getElementById('paper-toast'),
    veil: document.getElementById('transition-veil'),
  };

  let activeSpot = null;
  let activeScene = null;
  let selectedSwatchColor = '#b9603f';
  let toastTimer = null;

  function showToast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.add('hidden'), 2600);
  }

  function updatePassportBadge() {
    const allBooks = getAllBooks(BOOKS, progress);
    const total = countTotalStamps(progress, allBooks);
    const max = allBooks.reduce((s, b) => s + b.scenes.reduce((ss, sc) => ss + sc.spots.length, 0), 0);
    el.passportCount.textContent = `${total}/${max}`;
    el.modalTotalStamps.textContent = `${total} / ${max} 枚足迹印章`;
  }

  function renderPassportModal() {
    updatePassportBadge();
    const allBooks = getAllBooks(BOOKS, progress);
    el.passportGrid.innerHTML = '';
    for (const book of allBooks) {
      const card = document.createElement('div');
      card.className = 'passport-book-card';

      const collectedBook = countBookStamps(progress, book);
      const totalBook = book.scenes.reduce((s, sc) => s + sc.spots.length, 0);

      const head = document.createElement('div');
      head.className = 'passport-book-head';
      head.innerHTML = `<span>${book.title}</span><span>${collectedBook}/${totalBook}</span>`;
      card.appendChild(head);

      for (const sc of book.scenes) {
        const item = document.createElement('div');
        item.className = 'passport-scene-item';
        const doneCount = sc.spots.filter((sp) => getStamp(progress, sc.id, sp.id)).length;
        const scrapDone = sc.keepsake && hasScrap(progress, sc.id, sc.keepsake.id);
        item.innerHTML = `
          <div class="passport-scene-name">
            <span>${sc.name}</span>
            <span>${doneCount}/${sc.spots.length}</span>
          </div>
          <div class="passport-stamps-row">
            ${sc.spots
              .map((sp) => {
                const ok = !!getStamp(progress, sc.id, sp.id);
                return `<span class="mini-stamp ${ok ? 'done' : ''}">${sp.glyph} ${sp.name}</span>`;
              })
              .join('')}
            ${sc.keepsake ? `<span class="mini-stamp ${scrapDone ? 'done' : ''}">${sc.keepsake.glyph} ${sc.keepsake.name}</span>` : ''}
          </div>
        `;
        item.addEventListener('click', () => {
          el.passportModal.classList.add('hidden');
          onJumpToScene?.(book, sc);
        });
        card.appendChild(item);
      }
      el.passportGrid.appendChild(card);
    }
  }

  function renderWorldSpotPills() {
    if (!activeScene) return;
    el.worldSpotsPills.innerHTML = '';
    for (const spot of activeScene.spots) {
      const ok = !!getStamp(progress, activeScene.id, spot.id);
      const chip = document.createElement('button');
      chip.className = `spot-chip ${ok ? 'collected' : ''}`;
      chip.textContent = `${spot.glyph} ${spot.name}${ok ? ' ✓' : ''}`;
      chip.addEventListener('click', () => onSelectSpotChip?.(spot));
      el.worldSpotsPills.appendChild(chip);
    }
    if (activeScene.keepsake) {
      const got = hasScrap(progress, activeScene.id, activeScene.keepsake.id);
      el.worldScrapStatus.textContent = got
        ? `✓ 已拾取压花纪念：${activeScene.keepsake.glyph} ${activeScene.keepsake.name}`
        : `○ 地面可拾取纪念物：${activeScene.keepsake.glyph} ${activeScene.keepsake.name}`;
    } else {
      el.worldScrapStatus.textContent = '';
    }
  }

  function resizeImageToPolaroid(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const size = 320;
          const c = document.createElement('canvas');
          c.width = size;
          c.height = size;
          const ctx = c.getContext('2d');
          const minSide = Math.min(img.width, img.height);
          const sx = (img.width - minSide) / 2;
          const sy = (img.height - minSide) / 2;
          ctx.drawImage(img, sx, sy, minSide, minSide, 0, 0, size, size);
          resolve(c.toDataURL('image/jpeg', 0.84));
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Event bindings
  el.breadcrumbs.addEventListener('click', (e) => {
    const btn = e.target.closest('.crumb-btn');
    if (!btn) return;
    const stage = btn.dataset.stage;
    if (stage) onNavigateStage?.(stage);
  });

  el.btnDayNight.addEventListener('click', () => onToggleDayNight?.());
  el.btnAudio.addEventListener('click', () => onToggleAudio?.());
  el.btnPrevPage.addEventListener('click', () => onPrevPage?.());
  el.btnNextPage.addEventListener('click', () => onNextPage?.());
  el.btnEnterWorld.addEventListener('click', () => onEnterWorld?.());
  el.btnBackBook.addEventListener('click', () => onBackToBook?.());
  el.btnCameraView.addEventListener('click', () => onCycleView?.());
  el.btnCloseDrawer.addEventListener('click', () => el.drawer.classList.add('hidden'));

  el.polaroidUpload.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file || !activeScene || !activeSpot) return;
    try {
      const dataUrl = await resizeImageToPolaroid(file);
      saveSpotPhoto(progress, activeScene.id, activeSpot.id, dataUrl);
      el.polaroidImg.src = dataUrl;
      el.polaroidLabel.textContent = '已贴上旅行照片';
      showToast('已将旅行照片冲洗为拍立得卡片！');
    } catch {
      showToast('照片读取失败，请更换图片再试');
    }
    e.target.value = '';
  });

  el.btnCollectStamp.addEventListener('click', () => {
    if (!activeScene || !activeSpot) return;
    onCollectStamp?.(activeScene, activeSpot, {
      date: el.diaryDate.value,
      note: el.diaryNote.value.trim(),
    });
  });

  el.btnPassport.addEventListener('click', () => {
    renderPassportModal();
    el.passportModal.classList.remove('hidden');
  });
  el.btnClosePassport.addEventListener('click', () => el.passportModal.classList.add('hidden'));
  el.passportModal.addEventListener('click', (e) => {
    if (e.target === el.passportModal) el.passportModal.classList.add('hidden');
  });

  el.btnExportJson.addEventListener('click', () => {
    const blob = new Blob([exportProgressJSON(progress)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `earth-papertrails-passport-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('足迹护照存档已导出 JSON');
  });

  el.inputImportJson.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const text = await file.text();
      importProgressJSON(progress, text);
      renderPassportModal();
      renderWorldSpotPills();
      onBookCreated?.();
      showToast('足迹存档已恢复！');
    } catch {
      showToast('无效的存档文件格式');
    }
    e.target.value = '';
  });

  // Custom Book Creator Modal
  function openCreatorModal() {
    el.passportModal.classList.add('hidden');
    el.creatorModal.classList.remove('hidden');
  }

  el.btnOpenCreator.addEventListener('click', openCreatorModal);
  el.btnCloseCreator.addEventListener('click', () => el.creatorModal.classList.add('hidden'));
  el.creatorModal.addEventListener('click', (e) => {
    if (e.target === el.creatorModal) el.creatorModal.classList.add('hidden');
  });

  el.colorSwatches.addEventListener('click', (e) => {
    const sw = e.target.closest('.swatch');
    if (!sw) return;
    for (const s of el.colorSwatches.querySelectorAll('.swatch')) s.classList.remove('active');
    sw.classList.add('active');
    selectedSwatchColor = sw.dataset.color;
  });

  el.creatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleRaw = document.getElementById('new-book-title').value.trim();
    const region = document.getElementById('new-book-region').value.trim() || 'My Journey';
    const scName = document.getElementById('new-scene-name').value.trim();
    const coords = document.getElementById('new-scene-coords').value.trim() || 'Custom Earth Trail';
    const biomeKey = document.getElementById('new-scene-biome').value;
    const spotName = document.getElementById('new-spot-name').value.trim();
    const tmpl = CUSTOM_BIOME_TEMPLATES[biomeKey] || CUSTOM_BIOME_TEMPLATES.coastal;

    const uid = Date.now().toString(36);
    const title = titleRaw.startsWith('《') ? titleRaw : `《${titleRaw}》`;
    const newScene = {
      id: `custom-scene-${uid}`,
      captionEn: region.toLowerCase(),
      name: scName,
      coords,
      wallTheme: tmpl.wallTheme,
      floorColor: tmpl.floorColor,
      weather: tmpl.weather,
      defaultNight: biomeKey === 'nighttown',
      hasCanal: tmpl.hasCanal,
      backdropStyle: tmpl.backdropStyle,
      keepsake: tmpl.keepsake,
      scrapPos: [1.6, 2.1],
      bookProps: tmpl.bookProps,
      worldProps: tmpl.worldProps,
      spots: [
        {
          id: `custom-spot-${uid}`,
          name: spotName,
          coords,
          glyph: tmpl.keepsake.glyph,
          pos: [0.3, 0.7],
          story: `亲手装帧进《${titleRaw}》的专属地球坐标，等待写下你的旅程记忆。`,
        },
      ],
    };

    const newBook = {
      id: `custom-book-${uid}`,
      volume: '★',
      title,
      spineTitle: titleRaw.replace(/[《》]/g, ''),
      subtitle: region,
      regionEn: region,
      coverColor: selectedSwatchColor,
      spineColor: selectedSwatchColor,
      ribbonColor: '#d9a441',
      scenes: [newScene],
    };

    addCustomBook(progress, newBook);
    updatePassportBadge();
    el.creatorForm.reset();
    el.creatorModal.classList.add('hidden');
    onBookCreated?.(newBook);
    showToast(`已装帧新绘本 ${title}！`);
  });

  updatePassportBadge();

  return {
    openPassport() {
      renderPassportModal();
      el.passportModal.classList.remove('hidden');
    },
    openCreator: openCreatorModal,
    showToast,
    setStage(stage, { book, scene } = {}) {
      el.uiBookshelf.classList.toggle('hidden', stage !== 'bookshelf');
      el.uiBook.classList.toggle('hidden', stage !== 'book');
      el.uiWorld.classList.toggle('hidden', stage !== 'world');
      el.drawer.classList.add('hidden');

      const shelfBtn = el.breadcrumbs.querySelector('[data-stage="bookshelf"]');
      shelfBtn.classList.toggle('active', stage === 'bookshelf');

      if (stage === 'bookshelf') {
        el.sepBook.classList.add('hidden');
        el.crumbBook.classList.add('hidden');
        el.sepWorld.classList.add('hidden');
        el.crumbWorldTitle.classList.add('hidden');
      } else if (stage === 'book') {
        el.sepBook.classList.remove('hidden');
        el.crumbBook.classList.remove('hidden');
        el.crumbBook.classList.add('active');
        el.crumbBookTitle.textContent = book?.title || '';
        el.sepWorld.classList.add('hidden');
        el.crumbWorldTitle.classList.add('hidden');
      } else {
        el.sepBook.classList.remove('hidden');
        el.crumbBook.classList.remove('hidden');
        el.crumbBook.classList.remove('active');
        el.crumbBookTitle.textContent = book?.title || '';
        el.sepWorld.classList.remove('hidden');
        el.crumbWorldTitle.classList.remove('hidden');
        el.crumbWorldTitle.textContent = scene?.name || '';
        activeScene = scene;
        el.worldCoords.textContent = scene?.coords || '';
        el.worldName.textContent = scene?.name || '';
        renderWorldSpotPills();
      }
    },

    setTooltip(book, stampCount, screenPos) {
      if (!book) {
        el.tooltip.classList.add('hidden');
        return;
      }
      el.tooltipTitle.textContent = book.title;
      if (book.isCreator) {
        el.tooltipSub.textContent = '创建属于你的新折纸足迹册 · Click to Create';
      } else {
        const total = book.scenes.reduce((s, sc) => s + sc.spots.length, 0);
        el.tooltipSub.textContent = `${stampCount}/${total} Footprints · Click to Open`;
      }
      if (screenPos) {
        const x = Math.min(window.innerWidth - 250, Math.max(20, screenPos.x));
        const y = Math.min(window.innerHeight - 100, Math.max(90, screenPos.y));
        el.tooltip.style.left = `${x}px`;
        el.tooltip.style.top = `${y}px`;
      }
      el.tooltip.classList.remove('hidden');
    },

    setBookSpread(book, scene, index) {
      el.sceneCaption.textContent = `${scene.captionEn} · ${scene.name}`;
      const done = scene.spots.filter((sp) => getStamp(progress, scene.id, sp.id)).length;
      el.sceneMeta.textContent = `${scene.coords} · 足迹 ${done}/${scene.spots.length}`;

      el.btnPrevPage.disabled = index <= 0;
      el.btnNextPage.disabled = index >= book.scenes.length - 1;

      el.bookDots.innerHTML = '';
      book.scenes.forEach((sc, i) => {
        const dot = document.createElement('button');
        dot.className = `book-dot ${i === index ? 'active' : ''}`;
        dot.title = sc.name;
        dot.addEventListener('click', () => onGoToPage?.(i));
        el.bookDots.appendChild(dot);
      });
    },

    openSpotDrawer(scene, spot) {
      activeScene = scene;
      activeSpot = spot;
      const existing = getStamp(progress, scene.id, spot.id);
      el.cardCoords.textContent = spot.coords;
      el.cardGlyphSvg.textContent = spot.glyph;
      el.cardTitle.textContent = spot.name;
      el.cardStory.textContent = spot.story;
      el.diaryDate.value = existing?.collectedAt || new Date().toISOString().slice(0, 10);
      el.diaryNote.value = existing?.note || '';

      el.polaroidImg.src = existing?.photoDataUrl || createScenePolaroidFallback(scene);
      el.polaroidLabel.textContent = existing?.photoDataUrl ? '点击更换旅行照片' : '点击贴上旅行照片';

      if (scene.keepsake) {
        const got = hasScrap(progress, scene.id, scene.keepsake.id);
        el.keepsakeSlot.classList.toggle('collected', got);
        el.keepsakeArt.innerHTML = KEEPSAKE_SVGS[scene.keepsake.kind] || KEEPSAKE_SVGS.leaf;
        el.keepsakeName.textContent = got ? scene.keepsake.name : `未拾取: ${scene.keepsake.name}`;
      }

      el.cardSeal.classList.toggle('stamped', !!existing);
      el.btnCollectStamp.textContent = existing ? '更新旅记随笔 ✓' : '盖章收录足迹 ✓';
      el.stampStatus.textContent = existing ? `✓ 已盖章收录于 ${existing.collectedAt}` : '';
      el.drawer.classList.remove('hidden');
    },

    markSpotCollected(scene, spot, entry) {
      updatePassportBadge();
      renderWorldSpotPills();
      if (activeSpot && activeSpot.id === spot.id) {
        el.cardSeal.classList.add('stamped');
        el.btnCollectStamp.textContent = '更新旅记随笔 ✓';
        el.stampStatus.textContent = `✓ 足迹已盖章收录 (${entry.collectedAt})`;
      }
    },

    refreshScrapUI(scene, keepsake) {
      renderWorldSpotPills();
      if (activeScene && activeScene.id === scene.id && !el.drawer.classList.contains('hidden')) {
        el.keepsakeSlot.classList.add('collected');
        el.keepsakeName.textContent = keepsake.name;
      }
    },

    setViewLabel(label) {
      el.btnCameraView.textContent = `视角: ${label} (V)`;
    },

    setDayNightState(isNight) {
      document.body.classList.toggle('night-mode', isNight);
      el.dayNightIcon.textContent = isNight ? '☾' : '☀';
    },

    setAudioMuted(muted) {
      el.audioIcon.textContent = muted ? '🔇' : '🔊';
    },

    async fadeTransition(midCallback) {
      el.veil.classList.add('active');
      await new Promise((r) => setTimeout(r, 240));
      midCallback?.();
      await new Promise((r) => setTimeout(r, 70));
      el.veil.classList.remove('active');
    },
  };
}
