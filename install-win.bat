@echo off
REM GeoLayer 3D - Windows Installation Script
REM Run as Administrator

echo =====================================
echo GeoLayer 3D - Windows Installer
echo =====================================
echo.

REM Check if running as admin
openfiles >nul 2>&1
if errorlevel 1 (
    echo Error: This script must run as Administrator!
    echo Right-click and select "Run as administrator"
    pause
    exit /b 1
)

REM Set CEP path
set CEP_PATH=C:\Program Files\Common Files\Adobe\CEP\extensions\GeoLayer3D

echo Creating directory: %CEP_PATH%
if not exist "%CEP_PATH%" (
    mkdir "%CEP_PATH%"
    if errorlevel 1 (
        echo Error: Failed to create directory!
        pause
        exit /b 1
    )
)

echo Copying files...
xcopy manifest.xml "%CEP_PATH%" /Y
xcopy index.html "%CEP_PATH%" /Y
xcopy style.css "%CEP_PATH%" /Y
xcopy app.js "%CEP_PATH%" /Y
xcopy server.js "%CEP_PATH%" /Y
xcopy package.json "%CEP_PATH%" /Y
xcopy .env.example "%CEP_PATH%" /Y
xcopy jsx "%CEP_PATH%\jsx" /E /I /Y

echo.
echo =====================================
echo ✅ Installation Complete!
echo =====================================
echo.
echo Next steps:
echo 1. Open index.html in: %CEP_PATH%
echo 2. Replace 'YOUR_API_KEY' with your Google Maps API key
echo 3. Save the file
echo 4. Restart After Effects
echo 5. Go to Window ^> Extensions ^> GeoLayer 3D
echo.
echo Installation path: %CEP_PATH%
echo.
pause
