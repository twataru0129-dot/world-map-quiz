// 称号の定義。ゲーム結果(result)を見て条件を満たしていれば付与する。
// 新しい称号を増やしたいときは、この配列に条件を追加するだけでよい。
const GOOD_RESULT_RATE = 0.8; // 「好成績」の基準: 正答率80%以上

function correctRate(result) {
  if (result.totalQuestions === 0) return 0;
  return result.correctCount / result.totalQuestions;
}

export const TITLES = [
  {
    id: "first_explorer",
    name: "はじめての たんけんたい",
    description: "はじめてゲームをあそんだ",
    condition: (result, ctx) => ctx.isFirstGameEver,
  },
  {
    id: "asia_explorer",
    name: "アジアたんけんか",
    description: "アジアモードでこうせいせき",
    condition: (result) => result.regionId === "asia" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "europe_explorer",
    name: "ヨーロッパたんけんか",
    description: "ヨーロッパモードでこうせいせき",
    condition: (result) => result.regionId === "europe" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "africa_explorer",
    name: "アフリカたんけんか",
    description: "アフリカモードでこうせいせき",
    condition: (result) => result.regionId === "africa" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "americas_explorer",
    name: "アメリカ・カリブたんけんか",
    description: "北・中・南アメリカ／カリブモードでこうせいせき",
    condition: (result) => result.regionId === "americas" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "oceania_explorer",
    name: "オセアニアたんけんか",
    description: "オセアニアモードでこうせいせき",
    condition: (result) => result.regionId === "oceania" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "world_traveler",
    name: "せかいりょこうにん",
    description: "全世界モードでこうせいせき",
    condition: (result) => result.regionId === "world" && correctRate(result) >= GOOD_RESULT_RATE,
  },
  {
    id: "world_map_master",
    name: "せかいちず はかせ",
    description: "全世界×むずかしいで高得点",
    condition: (result) => result.regionId === "world" && result.difficulty === "hard" && result.score >= 8000,
  },
];

export function evaluateNewTitles(result, ctx, alreadyUnlockedIds) {
  const unlocked = new Set(alreadyUnlockedIds);
  const newlyUnlocked = [];
  for (const title of TITLES) {
    if (unlocked.has(title.id)) continue;
    if (title.condition(result, ctx)) {
      newlyUnlocked.push(title);
    }
  }
  return newlyUnlocked;
}

export function getTitleById(id) {
  return TITLES.find((t) => t.id === id);
}
