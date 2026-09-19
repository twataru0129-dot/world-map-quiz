import { getQuizPool } from "./countries.js";

export const QUESTION_TIME_LIMIT = 30;
const MAX_QUESTIONS = 10;

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// 早く正解するほど高得点になるスコア計算。
// 複雑な式を見せる必要はないため、子どもには「はやく見つけると高得点」とだけ伝える。
function calcScore(elapsedSeconds, streakBeforeThisAnswer) {
  const clampedElapsed = Math.min(QUESTION_TIME_LIMIT, Math.max(0, elapsedSeconds));
  const speedScore = Math.round(1000 - (clampedElapsed / QUESTION_TIME_LIMIT) * 800);
  const comboBonus = Math.min(streakBeforeThisAnswer, 10) * 20;
  return speedScore + comboBonus;
}

export function createQuizSession({ regionId, difficulty }) {
  const pool = getQuizPool(regionId, difficulty);
  const questionCount = Math.min(MAX_QUESTIONS, pool.length);
  const questions = shuffle(pool).slice(0, questionCount);

  const state = {
    regionId,
    difficulty,
    questions,
    questionCount,
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    wrongTapCount: 0,
    currentStreak: 0,
    maxStreak: 0,
    answerTimesSeconds: [],
    correctCountryIds: [],
  };

  function getCurrentQuestion() {
    if (state.currentIndex >= state.questionCount) return null;
    return state.questions[state.currentIndex];
  }

  function getProgress() {
    return { current: state.currentIndex + 1, total: state.questionCount };
  }

  // countryId が正解なら { correct: true, gainedScore } を、不正解なら { correct: false } を返す。
  function submitTap(countryId, elapsedSeconds) {
    const question = getCurrentQuestion();
    if (!question) return { correct: false };

    if (countryId === question.id) {
      const gainedScore = calcScore(elapsedSeconds, state.currentStreak);
      state.score += gainedScore;
      state.correctCount += 1;
      state.currentStreak += 1;
      state.maxStreak = Math.max(state.maxStreak, state.currentStreak);
      state.answerTimesSeconds.push(elapsedSeconds);
      state.correctCountryIds.push(question.id);
      return { correct: true, gainedScore, country: question };
    }

    state.wrongTapCount += 1;
    return { correct: false };
  }

  function handleTimeUp() {
    state.currentStreak = 0;
    return getCurrentQuestion();
  }

  function advance() {
    state.currentIndex += 1;
    return !isFinished();
  }

  function isFinished() {
    return state.currentIndex >= state.questionCount;
  }

  function getResultSummary() {
    const avg =
      state.answerTimesSeconds.length > 0
        ? state.answerTimesSeconds.reduce((a, b) => a + b, 0) / state.answerTimesSeconds.length
        : 0;
    return {
      regionId: state.regionId,
      difficulty: state.difficulty,
      totalQuestions: state.questionCount,
      correctCount: state.correctCount,
      wrongTapCount: state.wrongTapCount,
      score: state.score,
      maxStreak: state.maxStreak,
      averageAnswerTimeSeconds: avg,
      correctCountryIds: state.correctCountryIds.slice(),
    };
  }

  return {
    getCurrentQuestion,
    getProgress,
    submitTap,
    handleTimeUp,
    advance,
    isFinished,
    getResultSummary,
  };
}
