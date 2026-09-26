#!/bin/bash
# GeoLayer 3D - macOS Installation Script
# Run: chmod +x install-mac.sh && ./install-mac.sh

echo "====================================="
echo "GeoLayer 3D - macOS Installer"
echo "====================================="
echo ""

# Determine install location
echo "Choose installation location:"
echo "1. User Library (recommended) - ~/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
echo "2. System Library - /Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
echo "Enter 1 or 2: "
read -r choice

if [ "$choice" = "1" ]; then
    CEP_PATH="$HOME/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
    echo "Using: $CEP_PATH"
elif [ "$choice" = "2" ]; then
    CEP_PATH="/Library/Application Support/Adobe/CEP/extensions/GeoLayer3D"
    echo "Using: $CEP_PATH (requires sudo)"
else
    echo "Invalid choice. Exiting."
    exit 1
fi

# Create directory
echo ""
echo "Creating directory..."
if [ "$choice" = "2" ]; then
    sudo mkdir -p "$CEP_PATH"
else
    mkdir -p "$CEP_PATH"
fi

if [ ! -d "$CEP_PATH" ]; then
    echo "❌ Failed to create directory. Check permissions."
    exit 1
fi

echo "✅ Directory created: $CEP_PATH"

# Copy files
echo ""
echo "Copying files..."
if [ "$choice" = "2" ]; then
    sudo cp -r "manifest.xml" "index.html" "style.css" "app.js" "server.js" "package.json" ".env.example" "jsx" "$CEP_PATH/"
else
    cp -r manifest.xml index.html style.css app.js server.js package.json .env.example jsx "$CEP_PATH/"
fi

echo "✅ Files copied to: $CEP_PATH"

# Instructions
echo ""
echo "====================================="
echo "✅ Installation Complete!"
echo "====================================="
echo ""
echo "Next steps:"
echo "1. Open index.html in the installed folder"
echo "2. Replace 'YOUR_API_KEY' with your Google Maps API key"
echo "3. Save the file"
echo "4. Restart After Effects"
echo "5. Go to Window > Extensions > GeoLayer 3D"
echo ""
echo "Installation path: $CEP_PATH"
echo ""
