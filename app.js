const initialRoute = [
  { lat: 40.7128, lng: -74.006, speed: 36, heading: 87, altitude: 120 },
  { lat: 40.7148, lng: -74.0045, speed: 42, heading: 92, altitude: 118 },
  { lat: 40.7172, lng: -74.0028, speed: 48, heading: 105, altitude: 125 },
  { lat: 40.7194, lng: -74.0011, speed: 52, heading: 122, altitude: 135 },
  { lat: 40.7212, lng: -73.9995, speed: 46, heading: 138, altitude: 149 }
];

const state = {
  map: null,
  marker: null,
  polyline: null,
  route: initialRoute,
  index: 0,
  live: false
};

function updateStats(point) {
  document.getElementById("speedValue").textContent = `${Math.round(point.speed)} km/h`;
  document.getElementById("headingValue").textContent = `${Math.round(point.heading)}°`;
  document.getElementById("altitudeValue").textContent = `${Math.round(point.altitude)} m`;
}

function syncAE(payload) {
  if (window.__AEBridge && typeof window.__AEBridge.send === "function") {
    window.__AEBridge.send(payload);
  } else {
    console.log("AE bridge unavailable:", payload);
  }
}

function applyMapControls() {
  const center = {
    lat: Number(document.getElementById("latInput").value),
    lng: Number(document.getElementById("lngInput").value)
  };

  const zoom = Number(document.getElementById("zoomInput").value);
  const tilt = Number(document.getElementById("tiltInput").value);

  state.map.setCenter(center);
  state.map.setZoom(zoom);
  state.map.setTilt(tilt);
  state.map.setHeading(90);

  if (state.marker) state.marker.setPosition(center);

  syncAE({
    type: "LOCATION",
    lat: center.lat,
    lng: center.lng,
    zoom,
    tilt,
    timestamp: Date.now()
  });
}

function buildRoute() {
  if (!state.map) return;

  const path = state.route.map((p) => ({ lat: p.lat, lng: p.lng }));
  state.polyline = new google.maps.Polyline({
    path,
    geodesic: true,
    strokeColor: "#67e8f9",
    strokeOpacity: 0.9,
    strokeWeight: 4,
    map: state.map
  });
}

function setMapType() {
  const terrain = document.getElementById("terrainToggle").checked;
  const satellite = document.getElementById("satelliteToggle").checked;

  if (satellite) state.map.setMapTypeId(google.maps.MapTypeId.HYBRID);
  else if (terrain) state.map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  else state.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
}

function tickLive() {
  if (!state.live) return;

  const point = state.route[state.index % state.route.length];
  const next = { lat: point.lat, lng: point.lng };

  document.getElementById("latInput").value = point.lat;
  document.getElementById("lngInput").value = point.lng;
  updateStats(point);

  state.map.setCenter(next);
  state.marker.setPosition(next);

  syncAE({
    type: "LIVE_TRACK",
    lat: point.lat,
    lng: point.lng,
    speed: point.speed,
    heading: point.heading,
    altitude: point.altitude,
    timestamp: Date.now()
  });

  state.index += 1;
}

function initMap() {
  const center = { lat: 40.7128, lng: -74.006 };

  state.map = new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: 15,
    tilt: 45,
    heading: 90,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: false,
    gestureHandling: "greedy",
    streetViewControl: false
  });

  state.marker = new google.maps.Marker({
    position: center,
    map: state.map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: "#22c55e",
      fillOpacity: 1,
      strokeColor: "#ecfeff",
      strokeWeight: 2
    }
  });

  buildRoute();
  updateStats(state.route[0]);

  document.getElementById("applyBtn").addEventListener("click", applyMapControls);
  document.getElementById("terrainToggle").addEventListener("change", setMapType);
  document.getElementById("satelliteToggle").addEventListener("change", setMapType);

  document.getElementById("liveToggle").addEventListener("click", () => {
    state.live = !state.live;
    document.getElementById("liveToggle").textContent = state.live ? "Stop live" : "Start live";
  });

  document.getElementById("exportBtn").addEventListener("click", () => {
    syncAE({
      type: "EXPORT",
      lat: Number(document.getElementById("latInput").value),
      lng: Number(document.getElementById("lngInput").value),
      zoom: Number(document.getElementById("zoomInput").value),
      tilt: Number(document.getElementById("tiltInput").value)
    });
  });

  setInterval(tickLive, 2200);
}

window.addEventListener("load", () => {
  if (window.google && window.google.maps) {
    initMap();
  } else {
    console.warn("Google Maps script failed to load. Check the API key.");
  }
});

window.__AEBridge = {
  send: (payload) => {
    console.log("AE payload:", payload);
  }
};
