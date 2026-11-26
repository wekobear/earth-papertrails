// Signature warm cardstock palette faithfully adapted from xikhar/papertrails + reference mockups
export const PALETTE = {
  paper: '#efe0c2',      // 1 page cream: walls, uncoloured cardstock
  paperShade: '#e8d3ac', // 2 kraft cream: reverse faces, paths
  kraft: '#dcc39a',
  cutEdge: '#fbf6ea',    // 10 exposed paper core of a cut edge
  ochre: '#d9a441',      // 3 warm ochre
  mustard: '#dca848',
  terracotta: '#b9603f', // 4 terracotta
  rust: '#b25a3b',
  rose: '#c98374',       // 5 dusty rose
  sage: '#8e9a5b',       // 6 sage green
  olive: '#879356',
  pine: '#4f6b4a',       // 7 deep pine
  moss: '#4f6b4a',
  teal: '#5e9c9a',       // 8 river & canal teal
  tealDeep: '#3f7f84',
  brown: '#5a3a28',      // 9 ink & deep brown
  ink: '#5a3a28',
  indigoInk: '#2f3b6e',  // 11 reference origami border ink
  umber: '#2a1a12',      // L3 deep warm umber
  lantern: '#ffc45a',    // L1 lantern + window glow
  coolFill: '#9db7d6',   // L2 cool sky fill
  snow: '#f6efe4',
};

export const STAGE_PRESETS = {
  bookshelf: {
    day: {
      background: '#d6c4ac',
      fogColor: '#d6c4ac',
      keyColor: '#ffd49c',
      keyIntensity: 2.45,
      fillColor: '#e9d6be',
      fillIntensity: 0.9,
      hemiSky: '#fff0d8',
      hemiGround: '#a87f55',
      hemiIntensity: 0.65,
      accentColor: '#ffc45a',
      accentIntensity: 1.2,
      exposure: 0.9,
      glowIntensity: 0.55,
    },
    night: {
      background: '#1e1510',
      fogColor: '#1e1510',
      keyColor: '#7e97c4',
      keyIntensity: 0.68,
      fillColor: '#48526e',
      fillIntensity: 0.42,
      hemiSky: '#58698c',
      hemiGround: '#3d281a',
      hemiIntensity: 0.36,
      accentColor: '#ffb74d',
      accentIntensity: 3.6,
      exposure: 0.86,
      glowIntensity: 2.5,
    },
  },
  book: {
    day: {
      background: '#ece3d4',
      fogColor: '#ece3d4',
      keyColor: '#ffd6a3',
      keyIntensity: 2.55,
      fillColor: '#f4e0c8',
      fillIntensity: 1.05,
      hemiSky: '#fff3df',
      hemiGround: '#b88f64',
      hemiIntensity: 0.64,
      accentColor: '#ffc45a',
      accentIntensity: 0.35,
      exposure: 0.9,
      glowIntensity: 0.4,
    },
    night: {
      background: '#241e27',
      fogColor: '#241e27',
      keyColor: '#8ba4d6',
      keyIntensity: 0.85,
      fillColor: '#5d6b8e',
      fillIntensity: 0.55,
      hemiSky: '#6375a1',
      hemiGround: '#3d291d',
      hemiIntensity: 0.44,
      accentColor: '#ffc45a',
      accentIntensity: 2.1,
      exposure: 0.86,
      glowIntensity: 2.2,
    },
  },
  world: {
    day: {
      background: '#5c3e28',
      fogColor: '#5c3e28',
      keyColor: '#ffd49e',
      keyIntensity: 2.75,
      fillColor: '#f3cfa6',
      fillIntensity: 0.92,
      hemiSky: '#ffe9cc',
      hemiGround: '#b98858',
      hemiIntensity: 0.48,
      accentColor: '#ffc45a',
      accentIntensity: 0.85,
      exposure: 0.85,
      glowIntensity: 0.28,
    },
    night: {
      background: '#241711',
      fogColor: '#241711',
      keyColor: '#7a95cc',
      keyIntensity: 0.72,
      fillColor: '#485575',
      fillIntensity: 0.42,
      hemiSky: '#586996',
      hemiGround: '#2f1e14',
      hemiIntensity: 0.3,
      accentColor: '#ffc45a',
      accentIntensity: 3.1,
      exposure: 0.86,
      glowIntensity: 2.8,
    },
  },
};
