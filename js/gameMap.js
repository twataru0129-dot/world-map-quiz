import { REGION_BOUNDS, MAP_STYLE } from "./mapConfig.js";

const DRAG_PIXEL_THRESHOLD = 10;
const ZOOM_GRACE_MS = 300;
const DRAG_GRACE_MS = 150;

function baseStyle() {
  return {
    color: MAP_STYLE.border,
    weight: 1.3,
    fillColor: MAP_STYLE.land,
    fillOpacity: 1,
  };
}

export async function createGameMap(containerId, geoJsonUrl) {
  const map = L.map(containerId, {
    zoomControl: true,
    attributionControl: false,
    worldCopyJump: false,
    minZoom: 1.5,
    maxZoom: 8,
    maxBounds: L.latLngBounds([-89, -220], [89, 220]),
    maxBoundsViscosity: 0.6,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 120,
  });
  map.getContainer().style.background = MAP_STYLE.sea;

  const response = await fetch(geoJsonUrl);
  if (!response.ok) {
    throw new Error(`GeoJSONの読み込みに失敗しました (status: ${response.status})`);
  }
  const geoData = await response.json();

  const codeToLayers = new Map();
  let tapCallback = null;
  let highlightedCode = null;

  // --- ドラッグ／ピンチ操作と回答タップを区別するためのガード -------------
  let pressStart = null;
  let pointerMovedFar = false;
  let zooming = false;
  let zoomEndedAt = 0;
  let dragEndedAt = 0;

  const container = map.getContainer();

  function onPointerDown(e) {
    pressStart = { x: e.clientX, y: e.clientY };
    pointerMovedFar = false;
  }
  function onPointerMove(e) {
    if (!pressStart) return;
    const dx = e.clientX - pressStart.x;
    const dy = e.clientY - pressStart.y;
    if (Math.hypot(dx, dy) > DRAG_PIXEL_THRESHOLD) {
      pointerMovedFar = true;
    }
  }
  container.addEventListener("pointerdown", onPointerDown, true);
  container.addEventListener("pointermove", onPointerMove, true);

  map.on("dragstart", () => {
    pointerMovedFar = true;
  });
  map.on("dragend", () => {
    dragEndedAt = Date.now();
  });
  map.on("zoomstart", () => {
    zooming = true;
  });
  map.on("zoomend", () => {
    zooming = false;
    zoomEndedAt = Date.now();
  });

  function wasRecentGesture() {
    const now = Date.now();
    if (pointerMovedFar) return true;
    if (zooming) return true;
    if (now - zoomEndedAt < ZOOM_GRACE_MS) return true;
    if (now - dragEndedAt < DRAG_GRACE_MS) return true;
    return false;
  }

  function handleFeatureClick(code) {
    if (wasRecentGesture()) return;
    if (tapCallback) tapCallback(code);
  }

  const geoLayer = L.geoJSON(geoData, {
    style: baseStyle,
    onEachFeature: (feature, layer) => {
      const code = feature.properties.code;
      if (!codeToLayers.has(code)) codeToLayers.set(code, []);
      codeToLayers.get(code).push(layer);

      layer.on("click", () => handleFeatureClick(code));
      layer.on("add", () => {
        if (layer._path) layer._path.setAttribute("data-code", code);
      });
      layer.on("mouseover", () => {
        if (code !== highlightedCode) {
          layer.setStyle({ fillColor: MAP_STYLE.landHover });
        }
      });
      layer.on("mouseout", () => {
        if (code !== highlightedCode) {
          layer.setStyle({ fillColor: MAP_STYLE.land });
        }
      });
    },
  }).addTo(map);

  map.fitBounds(REGION_BOUNDS.world);

  function setLayersStyle(code, style) {
    const layers = codeToLayers.get(code);
    if (!layers) return;
    for (const l of layers) l.setStyle(style);
  }

  return {
    map,
    geoLayer,

    fitRegion(regionId) {
      // アニメーションさせない: ズームアニメ中は誤タップ防止ガードが働くため、
      // 出題開始直後にプレイヤーがタップしても反応が遅れて見えてしまうのを防ぐ。
      const bounds = REGION_BOUNDS[regionId] || REGION_BOUNDS.world;
      map.fitBounds(bounds, { animate: false });
      zooming = false;
      pointerMovedFar = false;
    },

    onCountryTap(cb) {
      tapCallback = cb;
    },

    highlightCorrect(code) {
      highlightedCode = code;
      setLayersStyle(code, { fillColor: MAP_STYLE.correct, weight: 2.2 });
    },

    highlightReveal(code) {
      highlightedCode = code;
      setLayersStyle(code, { fillColor: MAP_STYLE.reveal, weight: 2.2 });
    },

    clearHighlight() {
      if (highlightedCode) {
        setLayersStyle(highlightedCode, baseStyle());
        highlightedCode = null;
      }
    },

    hasCountry(code) {
      return codeToLayers.has(code);
    },

    invalidateSize() {
      map.invalidateSize();
    },
  };
}
