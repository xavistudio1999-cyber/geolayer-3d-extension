function createGeoLayerNull() {
  if (!app || !app.project) {
    alert("No active After Effects project found.");
    return;
  }

  var comp = app.project.activeItem;
  if (!(comp && comp instanceof CompItem)) {
    alert("Please open or create a composition first.");
    return;
  }

  var layer = comp.layers.addNull(comp.duration);
  layer.name = "GeoLayer3DLite";
  layer.position.setValue([0, 0, 0]);

  alert("GeoLayer3DLite null created.");
}

function handleGeoData(data) {
  if (!data) return;
  $.writeln("GeoLayer3D payload: " + JSON.stringify(data));
}

$.writeln("GeoLayer 3D Lite ExtendScript bridge loaded.");
