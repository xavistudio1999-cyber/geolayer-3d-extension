function createGeoNull() {
  var comp = app.project.activeItem;
  if (!(comp && comp instanceof CompItem)) {
    alert("Please create or select a composition first.");
    return;
  }

  var nullLayer = comp.layers.addNull(comp.duration);
  nullLayer.name = "GeoLayer3D";
  nullLayer.position.setValue([0, 0, 0]);
  alert("GeoLayer3D null created.");
}

function createGeoCamera() {
  var comp = app.project.activeItem;
  if (!(comp && comp instanceof CompItem)) {
    alert("Please create or select a composition first.");
    return;
  }

  var camera = comp.layers.addCamera("GeoCamera", [0, 0]);
  camera.position.setValue([0, 0, -600]);
  alert("GeoCamera created.");
}

function createRouteMarkers(routeArray) {
  if (!routeArray || !routeArray.length) return;

  var comp = app.project.activeItem;
  if (!(comp && comp instanceof CompItem)) {
    alert("Please create or select a composition first.");
    return;
  }

  for (var i = 0; i < routeArray.length; i++) {
    var marker = comp.layers.addNull(comp.duration);
    marker.name = "RouteMarker_" + i;
    marker.position.setValue([i * 120, i * 80, 0]);
  }

  alert("Created " + routeArray.length + " route markers.");
}

function sendGeoData(data) {
  if (!data) return;

  if (data.type === "ROUTE_EXPORT") {
    createRouteMarkers(data.route);
    return;
  }

  if (data.type === "EXPORT" || data.type === "LOCATION" || data.type === "LIVE_TRACK") {
    $.writeln("GeoLayer 3D payload: " + JSON.stringify(data));
  }
}

$.writeln("GeoLayer 3D ExtendScript bridge loaded.");
