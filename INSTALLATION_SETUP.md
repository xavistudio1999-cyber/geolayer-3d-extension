# GeoLayer 3D Extension - Complete Setup Package

## 📁 Directory Structure to Use

Copy everything in this repository to your After Effects CEP extensions folder.

### Windows Path
```
C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D
```

### macOS Path
```
/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
OR
~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
```

## 📦 What to Copy

Copy these files from the repository:

```
GeoLayer3D/
├── manifest.xml              ← CEP configuration (REQUIRED)
├── index.html                ← Main panel UI
├── style.css                 ← Styling
├── app.js                    ← Google Maps logic
├── server.js                 ← Preview server
├── package.json              ← Dependencies
├── .env.example              ← Environment template
└── jsx/
    └── bridge.jsx            ← After Effects ExtendScript
```

## ⚙️ Installation Steps

### Step 1: Download/Clone Repository
```bash
git clone https://github.com/xavistudio1999-cyber/geolayer-3d-extension.git
cd geolayer-3d-extension
```

### Step 2: Copy to After Effects CEP Extensions

#### Windows (Command Prompt as Administrator)
```cmd
mkdir "C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D"
xcopy * "C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D\" /E /I /Y
```

#### Windows (PowerShell as Administrator)
```powershell
$source = Get-Location
$dest = "C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D"
New-Item -ItemType Directory -Path $dest -Force | Out-Null
Copy-Item -Path "$source\*" -Destination $dest -Recurse -Force
Write-Host "Files copied to $dest"
```

#### macOS (Terminal)
```bash
source_dir="$(pwd)"
dest_dir="$HOME/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
mkdir -p "$dest_dir"
cp -r "$source_dir"/* "$dest_dir"/
echo "Files copied to $dest_dir"
```

OR for system-wide install:
```bash
sudo mkdir -p "/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
sudo cp -r "$(pwd)"/* "/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D/"
echo "Files copied to /Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
```

### Step 3: Add Google Maps API Key

1. Locate the copied `index.html` file in your CEP extensions folder
2. Open with text editor (Notepad, VS Code, etc.)
3. Find line 82:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&v=weekly&libraries=places"></script>
   ```
4. Replace `YOUR_API_KEY` with your actual key
5. Save the file

#### Get Your Google Maps API Key

1. Visit: https://console.cloud.google.com/
2. Create new project
3. Search: "Maps JavaScript API"
4. Click "Enable"
5. Go to "Credentials"
6. Click "Create Credentials" → "API Key"
7. Copy the key
8. Paste into `index.html` (replace YOUR_API_KEY)
9. Optional: Add domain/IP restrictions

### Step 4: Restart After Effects

1. **Close After Effects completely** (not just minimize)
2. **Reopen After Effects**
3. Go to: **Window > Extensions**
4. Find **GeoLayer 3D** in the menu
5. Click to open the panel

## ✅ Verify Installation

If GeoLayer 3D appears in Window > Extensions:
- ✅ Extension folder is in correct location
- ✅ manifest.xml is recognized
- ✅ Ready to use

If NOT appearing:
- Check CEP folder path is correct
- Verify all files were copied (especially manifest.xml)
- Restart AE again
- Check: Help > System Console for errors

## 🚀 First Use

1. Open or create a composition
2. Open GeoLayer 3D panel
3. Map should display with New York location
4. Try these buttons:
   - **Apply** - Update map view
   - **Start live** - Simulate movement
   - **Route to AE** - Create markers
   - **Send to AE** - Export data
5. Toggle 3D terrain or Satellite view

## 📋 File Locations Reference

### Windows 10/11
```
C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D
```

### Windows (Alternative - Creative Cloud)
```
C:\Program Files\Adobe\Adobe After Effects [VERSION]\Support Files\CEP\extensions\GeoLayer3D
```

### macOS (User)
```
~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
```

### macOS (System-wide)
```
/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D
```

## 🛠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Panel not in Extensions menu | Check CEP path, restart AE, verify manifest.xml exists |
| Map not loading | Replace YOUR_API_KEY with real API key in index.html |
| "Unable to load extension" | Run as Administrator (Windows) or check permissions (macOS) |
| Blank white panel | Check browser console in Debug mode, verify CSS loads |
| ExtendScript errors | Ensure After Effects 2022 or later |
| GPS button not working | Check jsx/bridge.jsx exists, restart AE |

## 🔧 Configuration Files

### manifest.xml
DO NOT MODIFY - Contains CEP extension settings

### index.html
EDIT ONLY: Replace YOUR_API_KEY with real API key

### app.js
You can edit the `route` array (lines 6-12) to change GPS path:
```javascript
const route = [
  { lat: 40.7128, lng: -74.006, speed: 36, heading: 87, altitude: 120 },
  // Add more points here
];
```

### jsx/bridge.jsx
Contains After Effects ExtendScript integration - modify to customize layer creation

## 📚 Features

✅ Google Maps panel inside After Effects  
✅ Real-time location tracking simulation  
✅ 3D tilt and zoom controls  
✅ Terrain and satellite view modes  
✅ Route path export  
✅ Automatic null/camera/marker creation  
✅ Cross-platform (Windows & macOS)  
✅ All After Effects versions 2022+  

## 📞 Support

If installation fails:
1. Check file paths match your OS
2. Verify manifest.xml exists in GeoLayer3D folder
3. Restart After Effects after copying files
4. Check Windows Firewall or macOS Security settings
5. Review System Console errors (Help > System Console)

---

**Next Step:** Once installed, replace YOUR_API_KEY and restart AE to use!
