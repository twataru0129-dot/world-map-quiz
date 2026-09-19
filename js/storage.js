const STORAGE_KEY = "worldMapQuiz.v1";

function defaultState() {
  return {
    collectedCountryIds: [],
    unlockedTitleIds: [],
    bestScoreOverall: 0,
    bestScoreByRegion: {},
    bestScoreByDifficulty: {},
    playCount: 0,
    soundOn: true,
  };
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    console.error("[storage] 保存データの読み込みに失敗しました", e);
    return defaultState();
  }
}

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error("[storage] 保存に失敗しました", e);
  }
}

export const Storage = {
  getState() {
    return load();
  },

  addCollectedCountries(countryIds) {
    const state = load();
    const set = new Set(state.collectedCountryIds);
    let changed = false;
    for (const id of countryIds) {
      if (!set.has(id)) {
        set.add(id);
        changed = true;
      }
    }
    if (changed) {
      state.collectedCountryIds = Array.from(set);
      save(state);
    }
    return state.collectedCountryIds;
  },

  addUnlockedTitles(titleIds) {
    const state = load();
    const set = new Set(state.unlockedTitleIds);
    let changed = false;
    for (const id of titleIds) {
      if (!set.has(id)) {
        set.add(id);
        changed = true;
      }
    }
    if (changed) {
      state.unlockedTitleIds = Array.from(set);
      save(state);
    }
    return state.unlockedTitleIds;
  },

  recordGameResult({ regionId, difficulty, score }) {
    const state = load();
    state.playCount += 1;
    if (score > state.bestScoreOverall) state.bestScoreOverall = score;

    if (!state.bestScoreByRegion[regionId] || score > state.bestScoreByRegion[regionId]) {
      state.bestScoreByRegion[regionId] = score;
    }
    if (!state.bestScoreByDifficulty[difficulty] || score > state.bestScoreByDifficulty[difficulty]) {
      state.bestScoreByDifficulty[difficulty] = score;
    }
    save(state);
    return state;
  },

  setSoundOn(on) {
    const state = load();
    state.soundOn = on;
    save(state);
    return state;
  },

  isCollected(countryId) {
    return load().collectedCountryIds.includes(countryId);
  },
};
