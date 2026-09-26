# GeoLayer 3D for After Effects

A lightweight CEP extension starter for Adobe After Effects that combines:

- Google Maps panel inside AE
- live route simulation
- 3D map tilt/zoom controls
- route path export to AE
- camera and null layer generation via ExtendScript
- cross-platform install flow for Windows and macOS

This is optimized as a practical starter for a GeoLayer-style workflow inside AE, not as a full GIS engine.

## What it does

- Shows a dockable map panel inside After Effects
- Lets you choose latitude/longitude, zoom, and tilt
- Simulates realtime location movement
- Exports the current map state to AE via ExtendScript
- Creates a null layer and route-oriented camera data in the project
- This foundation supports future features such as:
  - real GPS/WebSocket data feed
  - 3D terrain overlays
  - markers + route animation
  - Time remapping tied to map movement

## After Effects integration (dockable panel)

This uses the CEP extension model used by AE panels and is compatible with the standard panel workflow used by Adobe apps.

### Install folder

Windows:
- C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D

macOS:
- /Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
- or ~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D

Place the extension folder there, then restart After Effects.

Then open:
- Window > Extensions > GeoLayer 3D

## Local browser preview

This project can also be previewed in a browser before importing into AE:

npm install
npm start

Then open:

http://localhost:4173

## Google Maps API setup

1. Go to Google Cloud Console
2. Enable "Maps JavaScript API"
3. Create an API key
4. Replace `YOUR_API_KEY` in `index.html`

## Files

- `manifest.xml` — CEP manifest for AE panel
- `index.html` — panel UI
- `style.css` — panel styling
- `app.js` — map + realtime route logic
- `jsx/bridge.jsx` — ExtendScript bridge for AE operations
- `server.js` — local preview server

## Adobe ExtendScript workflow

The panel sends JSON payloads to AE via `evalScript()`. In `jsx/bridge.jsx` the bridge can create:

- null layers
- camera layers
- route markers
- compositional metadata from map location

This gives you a clean way to connect map movement to timeline animation in AE.

## Notes

- This is a starter extension and is intentionally lightweight.
- For production-quality 3D geospatial rendering, you would typically add:
  - WebGL terrain
  - live service integration
  - more advanced camera animation
  - custom map tiles / overlays

## Useful next upgrades

- connect to live GPS / websocket / MQTT feed
- create AE keyframes from GPS coordinates
- add marker groups and animated path layers
- attach map updates directly to AE camera movement
- package as a signed or distributed extension for a team
