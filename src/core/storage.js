const STORAGE_KEY_V2 = 'earth-papertrails-v2';
const STORAGE_KEY_V1 = 'earth-papertrails-v1';

const DEFAULT_DATA = {
  stamps: {
    'kyoto-shrine:torii-tunnel': {
      collectedAt: '2026-10-12',
      note: '清晨穿过朱红色鸟居长廊，纸片樱花正好落在石阶上。',
      photoDataUrl: '',
    },
    'venice-canal:rialto-arch': {
      collectedAt: '2026-10-19',
      note: '拱桥下飘过两只折纸贡多拉，水鸭青色的河面映出微光。',
      photoDataUrl: '',
    },
    'hallstatt-night:lakeside-pier': {
      collectedAt: '2026-11-25',
      note: '提着纸灯笼走过湖畔木桥，暖黄窗光在夜色纸山间亮起。',
      photoDataUrl: '',
    },
    'traveler-bedroom:map-desk': {
      collectedAt: '2026-11-02',
      note: '回到暖黄台灯下的书桌，墙上的软木板又多了一枚大头针。',
      photoDataUrl: '',
    },
  },
  scraps: ['kyoto-shrine:sakura-scrap', 'hallstatt-night:ginkgo-scrap'],
  visitedScenes: ['kyoto-shrine', 'venice-canal', 'hallstatt-night', 'traveler-bedroom'],
  customBooks: [],
};

function cloneDefaults() {
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

export function loadProgress() {
  try {
    const rawV2 = localStorage.getItem(STORAGE_KEY_V2);
    if (rawV2) {
      const parsed = JSON.parse(rawV2);
      return normalizeProgress(parsed);
    }
    const rawV1 = localStorage.getItem(STORAGE_KEY_V1);
    if (rawV1) {
      const parsedV1 = JSON.parse(rawV1);
      const merged = cloneDefaults();
      if (parsedV1?.stamps && typeof parsedV1.stamps === 'object') {
        Object.assign(merged.stamps, parsedV1.stamps);
      }
      if (Array.isArray(parsedV1?.visitedScenes)) {
        merged.visitedScenes = Array.from(new Set([...merged.visitedScenes, ...parsedV1.visitedScenes]));
      }
      saveProgress(merged);
      return merged;
    }
    const fresh = cloneDefaults();
    saveProgress(fresh);
    return fresh;
  } catch {
    return cloneDefaults();
  }
}

function normalizeProgress(parsed) {
  return {
    stamps: parsed?.stamps && typeof parsed.stamps === 'object' ? parsed.stamps : {},
    scraps: Array.isArray(parsed?.scraps) ? parsed.scraps : [],
    visitedScenes: Array.isArray(parsed?.visitedScenes) ? parsed.visitedScenes : [],
    customBooks: Array.isArray(parsed?.customBooks) ? parsed.customBooks : [],
  };
}

export function saveProgress(data) {
  try {
    localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(data));
  } catch {
    // Ignore storage quota errors
  }
}

export function stampKey(sceneId, spotId) {
  return `${sceneId}:${spotId}`;
}

export function getStamp(data, sceneId, spotId) {
  return data.stamps[stampKey(sceneId, spotId)] || null;
}

export function collectStamp(data, sceneId, spotId, { date, note, photoDataUrl }) {
  const key = stampKey(sceneId, spotId);
  const prev = data.stamps[key] || {};
  data.stamps[key] = {
    collectedAt: date || new Date().toISOString().slice(0, 10),
    note: note !== undefined ? note : prev.note || '',
    photoDataUrl: photoDataUrl !== undefined ? photoDataUrl : prev.photoDataUrl || '',
  };
  if (!data.visitedScenes.includes(sceneId)) {
    data.visitedScenes.push(sceneId);
  }
  saveProgress(data);
  return data.stamps[key];
}

export function saveSpotPhoto(data, sceneId, spotId, photoDataUrl) {
  const key = stampKey(sceneId, spotId);
  const prev = data.stamps[key] || {};
  data.stamps[key] = {
    collectedAt: prev.collectedAt || new Date().toISOString().slice(0, 10),
    note: prev.note || '',
    photoDataUrl,
  };
  saveProgress(data);
  return data.stamps[key];
}

export function scrapKey(sceneId, scrapId) {
  return `${sceneId}:${scrapId}`;
}

export function hasScrap(data, sceneId, scrapId) {
  return data.scraps.includes(scrapKey(sceneId, scrapId));
}

export function collectScrap(data, sceneId, scrapId) {
  const k = scrapKey(sceneId, scrapId);
  if (!data.scraps.includes(k)) {
    data.scraps.push(k);
    saveProgress(data);
    return true;
  }
  return false;
}

export function markSceneVisited(data, sceneId) {
  if (!data.visitedScenes.includes(sceneId)) {
    data.visitedScenes.push(sceneId);
    saveProgress(data);
  }
}

export function getAllBooks(baseBooks, data) {
  const custom = Array.isArray(data?.customBooks) ? data.customBooks : [];
  return [...baseBooks, ...custom];
}

export function addCustomBook(data, bookSpec) {
  if (!Array.isArray(data.customBooks)) data.customBooks = [];
  data.customBooks.push(bookSpec);
  saveProgress(data);
  return bookSpec;
}

export function countBookStamps(data, book) {
  let count = 0;
  for (const scene of book.scenes) {
    for (const spot of scene.spots) {
      if (getStamp(data, scene.id, spot.id)) count++;
    }
  }
  return count;
}

export function countTotalStamps(data, books) {
  return books.reduce((sum, b) => sum + countBookStamps(data, b), 0);
}

export function exportProgressJSON(data) {
  return JSON.stringify(data, null, 2);
}

export function importProgressJSON(data, jsonStr) {
  const parsed = JSON.parse(jsonStr);
  const norm = normalizeProgress(parsed);
  data.stamps = norm.stamps;
  data.scraps = norm.scraps;
  data.visitedScenes = norm.visitedScenes;
  data.customBooks = norm.customBooks;
  saveProgress(data);
  return data;
}
