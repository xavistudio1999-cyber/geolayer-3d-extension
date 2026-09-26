# GeoLayer 3D Extension - Setup Package

## 🚀 Quick Start

### Windows
1. Right-click `install-win.bat`
2. Select "Run as administrator"
3. Files will be copied automatically
4. Continue with API Key setup below

### macOS
1. Open Terminal
2. Run: `chmod +x install-mac.sh && ./install-mac.sh`
3. Follow on-screen prompts
4. Continue with API Key setup below

## 🔑 API Key Setup (Both Platforms)

1. Find where files were installed:
   - **Windows:** `C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D`
   - **macOS:** `~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D`

2. Open `index.html` with text editor

3. Find line with `YOUR_API_KEY`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly&libraries=places"></script>
   ```

4. Replace `YOUR_API_KEY` with real Google Maps API key

5. Save file

## 📍 Get Google Maps API Key

1. Go to https://console.cloud.google.com/
2. Create new project
3. Search "Maps JavaScript API" and enable it
4. Go to Credentials
5. Create API Key
6. Copy and paste into `index.html`

## ✅ Verify Installation

1. Restart After Effects completely
2. Go to **Window > Extensions**
3. Look for **GeoLayer 3D**
4. Click to open panel

If not visible:
- Check installation path
- Verify `manifest.xml` exists in folder
- Restart AE again

## 🎮 First Use

1. Panel opens with map of New York
2. Try buttons:
   - **Apply** - Update map location
   - **Start live** - Simulate GPS movement
   - **Route to AE** - Export route
   - **Send to AE** - Create layers
3. Toggle **3D terrain** or **Satellite**

## 📁 Installation Paths

**Windows:**
```
C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D
```

**macOS:**
```
~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
OR
/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
```

## 🆘 Troubleshooting

| Issue | Fix |
|-------|-----|
| "Permission Denied" | Run script as Administrator (Windows) or with sudo (macOS) |
| Files not copied | Check disk space, UAC permissions, antivirus interference |
| Panel not appearing | Restart AE, check CEP path, verify manifest.xml exists |
| Map not loading | Replace YOUR_API_KEY in index.html with real key |
| "Unable to create directory" | Ensure Adobe CEP folder exists, check permissions |

---

**After installation + API key setup, you're ready to use GeoLayer 3D in After Effects!**
