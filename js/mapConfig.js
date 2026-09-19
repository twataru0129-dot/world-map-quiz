// 地域ごとの初期表示範囲。ゲーム開始時に一度だけこの範囲に自動調整する。
// 値は [[南端緯度, 西端経度], [北端緯度, 東端経度]] の順（Leafletの fitBounds 形式）。
export const REGION_BOUNDS = {
  world: [
    [-56, -170],
    [78, 190],
  ],
  asia: [
    [-10, 25],
    [55, 150],
  ],
  europe: [
    [34, -25],
    [71, 45],
  ],
  africa: [
    [-36, -20],
    [38, 52],
  ],
  americas: [
    [-56, -135],
    [72, -28],
  ],
  oceania: [
    [-48, 110],
    [15, 190],
  ],
};

export const MAP_STYLE = {
  sea: "#aee3f2",
  land: "#f7efd9",
  landHover: "#ffe9a8",
  border: "#5a5a5a",
  correct: "#3ddc73",
  reveal: "#ff8a5c",
};
