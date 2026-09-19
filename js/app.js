import { COUNTRIES, REGIONS, validateCountriesData } from "./countries.js";
import { createQuizSession, QUESTION_TIME_LIMIT } from "./quiz.js";
import { createGameMap } from "./gameMap.js";
import { Storage } from "./storage.js";
import { TITLES, evaluateNewTitles } from "./titles.js";
import { unlockAudio, setSoundEnabled, playCorrect, playWrong, playTimeUp, playTick, playTitleGet } from "./sound.js";
import { flagEmoji, formatSeconds } from "./utils.js";

validateCountriesData();

const REGION_EMOJI = {
  world: "🌍",
  asia: "🌏",
  europe: "🏰",
  africa: "🦁",
  americas: "🌎",
  oceania: "🏝️",
};

const state = {
  regionId: null,
  difficulty: null,
  quizSession: null,
  gameMap: null,
  mapReady: false,
  remainingSeconds: QUESTION_TIME_LIMIT,
  timerHandle: null,
  locked: false,
  collectionTab: "all",
};

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function initSoundToggle() {
  const soundOn = Storage.getState().soundOn;
  setSoundEnabled(soundOn);
  updateSoundButton(soundOn);
  document.getElementById("btn-sound-toggle").addEventListener("click", () => {
    const next = !Storage.getState().soundOn;
    Storage.setSoundOn(next);
    setSoundEnabled(next);
    updateSoundButton(next);
  });
}

function updateSoundButton(on) {
  const btn = document.getElementById("btn-sound-toggle");
  btn.textContent = on ? "🔊 おと：オン" : "🔇 おと：オフ";
}

function renderRegionGrid() {
  const grid = document.getElementById("region-grid");
  grid.innerHTML = "";
  for (const region of REGIONS) {
    const btn = document.createElement("button");
    btn.className = "btn btn-region";
    btn.setAttribute("aria-label", `${region.label} を選ぶ`);
    btn.innerHTML = `<span class="region-emoji">${REGION_EMOJI[region.id] || "🗺️"}</span>${region.label}`;
    btn.addEventListener("click", () => {
      state.regionId = region.id;
      document.getElementById("difficulty-region-label").textContent = `${region.label} で あそぼう！`;
      showScreen("screen-difficulty");
    });
    grid.appendChild(btn);
  }
}

function ensureMap() {
  if (!state.gameMap) {
    state.gameMap = createGameMap("map", "data/countries.geojson").then((map) => {
      map.onCountryTap(handleMapTap);
      if (location.search.includes("debug")) window.__WMQ_DEBUG = { map, state };
      return map;
    });
  }
  return state.gameMap;
}

async function startQuizFlow() {
  showScreen("screen-quiz");
  document.getElementById("quiz-question").textContent = "じゅんびちゅう…";
  const map = await ensureMap();
  map.invalidateSize();
  map.clearHighlight();
  map.fitRegion(state.regionId);
  state.quizSession = createQuizSession({ regionId: state.regionId, difficulty: state.difficulty });
  state.locked = false;
  startQuestion();
}

function startQuestion() {
  const question = state.quizSession.getCurrentQuestion();
  if (!question) {
    finishGame();
    return;
  }
  const { current, total } = state.quizSession.getProgress();
  document.getElementById("quiz-progress").textContent = `${current} / ${total}もん`;
  document.getElementById("quiz-question").textContent = `${question.nameJa}をさがそう！`;
  state.remainingSeconds = QUESTION_TIME_LIMIT;
  updateTimerDisplay();
  hideFeedback();

  if (state.timerHandle) clearInterval(state.timerHandle);
  state.timerHandle = setInterval(() => {
    state.remainingSeconds -= 1;
    updateTimerDisplay();
    if (state.remainingSeconds <= 5 && state.remainingSeconds > 0) playTick();
    if (state.remainingSeconds <= 0) {
      clearInterval(state.timerHandle);
      state.timerHandle = null;
      onTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById("quiz-timer-value");
  el.textContent = Math.max(0, state.remainingSeconds);
  const wrap = document.getElementById("quiz-timer");
  wrap.classList.toggle("hurry", state.remainingSeconds <= 10);
}

function showFeedback(text, subText, className) {
  const el = document.getElementById("quiz-feedback");
  el.className = `quiz-feedback show ${className}`;
  const mainHtml = `<span class="feedback-main">${text}</span>`;
  el.innerHTML = subText ? `${mainHtml}<span class="feedback-sub">${subText}</span>` : mainHtml;
}

function hideFeedback() {
  const el = document.getElementById("quiz-feedback");
  el.className = "quiz-feedback";
  el.innerHTML = "";
}

async function handleMapTap(countryId) {
  if (state.locked || !state.quizSession) return;
  const elapsed = QUESTION_TIME_LIMIT - state.remainingSeconds;
  const result = state.quizSession.submitTap(countryId, elapsed);
  const map = await ensureMap();

  if (result.correct) {
    state.locked = true;
    if (state.timerHandle) {
      clearInterval(state.timerHandle);
      state.timerHandle = null;
    }
    playCorrect();
    map.highlightCorrect(countryId);
    showFeedback("せいかい！", result.country.nameJa, "correct");
    setTimeout(() => {
      map.clearHighlight();
      hideFeedback();
      state.locked = false;
      state.quizSession.advance();
      startQuestion();
    }, 1600);
  } else {
    playWrong();
    showFeedback("ちがうよ！", "", "wrong");
    setTimeout(() => {
      const el = document.getElementById("quiz-feedback");
      if (el.classList.contains("wrong")) hideFeedback();
    }, 700);
  }
}

async function onTimeUp() {
  if (!state.quizSession) return;
  state.locked = true;
  const question = state.quizSession.handleTimeUp();
  playTimeUp();
  const map = await ensureMap();
  if (question) {
    map.highlightReveal(question.id);
    showFeedback("じかんぎれ！", `こたえ：${question.nameJa}`, "timeup");
  }
  setTimeout(() => {
    map.clearHighlight();
    hideFeedback();
    state.locked = false;
    state.quizSession.advance();
    startQuestion();
  }, 2200);
}

function finishGame() {
  if (state.timerHandle) {
    clearInterval(state.timerHandle);
    state.timerHandle = null;
  }
  const summary = state.quizSession.getResultSummary();
  const priorPlayCount = Storage.getState().playCount;

  Storage.recordGameResult({ regionId: summary.regionId, difficulty: summary.difficulty, score: summary.score });
  Storage.addCollectedCountries(summary.correctCountryIds);

  const newTitles = evaluateNewTitles(
    summary,
    { isFirstGameEver: priorPlayCount === 0 },
    Storage.getState().unlockedTitleIds
  );
  if (newTitles.length > 0) {
    Storage.addUnlockedTitles(newTitles.map((t) => t.id));
    playTitleGet();
  }

  renderResult(summary, newTitles);
  showScreen("screen-result");
}

function renderResult(summary, newTitles) {
  document.getElementById("result-headline").textContent =
    `${summary.totalQuestions}もん中 ${summary.correctCount}もん せいかい！`;
  document.getElementById("result-score").textContent = summary.score;
  document.getElementById("result-avg-time").textContent = formatSeconds(summary.averageAnswerTimeSeconds);
  document.getElementById("result-max-streak").textContent = `${summary.maxStreak}もん`;

  const titlesEl = document.getElementById("result-new-titles");
  titlesEl.innerHTML = "";
  for (const title of newTitles) {
    const badge = document.createElement("span");
    badge.className = "result-new-title-badge";
    badge.textContent = `🏆 ${title.name}`;
    titlesEl.appendChild(badge);
  }
}

function renderCollectionTabs() {
  const tabsEl = document.getElementById("collection-tabs");
  tabsEl.innerHTML = "";
  const tabs = [{ id: "all", label: "すべて" }, ...REGIONS.filter((r) => r.id !== "world")];
  for (const tab of tabs) {
    const btn = document.createElement("button");
    btn.className = "collection-tab" + (state.collectionTab === tab.id ? " active" : "");
    btn.textContent = tab.label;
    btn.addEventListener("click", () => {
      state.collectionTab = tab.id;
      renderCollectionScreen();
    });
    tabsEl.appendChild(btn);
  }
}

function renderCollectionScreen() {
  renderCollectionTabs();
  const collected = new Set(Storage.getState().collectedCountryIds);
  document.getElementById("collection-progress").textContent = `${collected.size} / 198 こく`;

  const grid = document.getElementById("collection-grid");
  grid.innerHTML = "";
  const list = COUNTRIES.filter((c) => state.collectionTab === "all" || c.region === state.collectionTab);
  for (const c of list) {
    const isCollected = collected.has(c.id);
    const item = document.createElement("div");
    item.className = "collection-item" + (isCollected ? "" : " locked");
    item.innerHTML = `
      <span class="flag">${isCollected ? flagEmoji(c.code) : "❔"}</span>
      <span class="name">${isCollected ? c.nameJa : "？？？"}</span>
    `;
    grid.appendChild(item);
  }
}

function renderTitlesScreen() {
  const unlocked = new Set(Storage.getState().unlockedTitleIds);
  const listEl = document.getElementById("titles-list");
  listEl.innerHTML = "";
  for (const title of TITLES) {
    const isUnlocked = unlocked.has(title.id);
    const card = document.createElement("div");
    card.className = "title-card" + (isUnlocked ? "" : " locked");
    card.innerHTML = `
      <span class="title-icon">${isUnlocked ? "🏆" : "🔒"}</span>
      <span>
        <span class="title-name">${isUnlocked ? title.name : "？？？のしょうごう"}</span><br />
        <span class="title-desc">${isUnlocked ? title.description : "あそんでいると もらえるかも！"}</span>
      </span>
    `;
    listEl.appendChild(card);
  }
}

function wireNav() {
  document.querySelectorAll("[data-back-to]").forEach((btn) => {
    btn.addEventListener("click", () => showScreen(btn.getAttribute("data-back-to")));
  });

  document.getElementById("btn-start").addEventListener("click", () => {
    unlockAudio();
    showScreen("screen-region");
  });
  document.getElementById("btn-open-collection").addEventListener("click", () => {
    renderCollectionScreen();
    showScreen("screen-collection");
  });
  document.getElementById("btn-open-titles").addEventListener("click", () => {
    renderTitlesScreen();
    showScreen("screen-titles");
  });

  document.querySelectorAll(".btn-difficulty").forEach((btn) => {
    btn.addEventListener("click", () => {
      unlockAudio();
      state.difficulty = btn.getAttribute("data-difficulty");
      startQuizFlow();
    });
  });

  document.getElementById("btn-retry").addEventListener("click", () => {
    startQuizFlow();
  });
  document.getElementById("btn-change-region").addEventListener("click", () => {
    showScreen("screen-region");
  });
  document.getElementById("btn-to-top").addEventListener("click", () => {
    showScreen("screen-top");
  });
}

function init() {
  initSoundToggle();
  renderRegionGrid();
  wireNav();
  showScreen("screen-top");
}

init();
