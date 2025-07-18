#!/bin/bash

echo "🧹 Starting React Native cleanup..."

# Stop any running processes
echo "📱 Stopping React Native processes..."
pkill -f "react-native"
pkill -f "expo"
pkill -f "metro"

# Clean Watchman
echo "👀 Cleaning Watchman..."
watchman watch-del-all 2>/dev/null || echo "Watchman not found or already clean"
watchman shutdown-server 2>/dev/null || echo "Watchman server not running"

# Clean React Native caches
echo "🗑️ Cleaning React Native caches..."
rm -rf ~/.react-native
rm -rf ~/.expo
rm -rf ~/.metro

# Clean project caches
echo "📦 Cleaning project caches..."
rm -rf node_modules
rm -rf .expo
rm -rf ios/build
rm -rf android/build
rm -rf android/app/build
rm -rf android/.gradle

# Clean Metro cache
echo "🚇 Cleaning Metro cache..."
npx react-native start --reset-cache 2>/dev/null || echo "Metro not running"
rm -rf $TMPDIR/metro-*
rm -rf $TMPDIR/haste-*
rm -rf $TMPDIR/react-*

# Clean Yarn cache
echo "🧶 Cleaning Yarn cache..."
yarn cache clean

# Clean npm cache (if used)
echo "📦 Cleaning npm cache..."
npm cache clean --force 2>/dev/null || echo "npm not found"

# Clean iOS specific
echo "🍎 Cleaning iOS..."
rm -rf ios/Pods
rm -rf ios/Podfile.lock
rm -rf ios/build
rm -rf ios/DerivedData

# Clean Android specific
echo "🤖 Cleaning Android..."
rm -rf android/.gradle
rm -rf android/build
rm -rf android/app/build
rm -rf android/local.properties

# Clean Expo specific
echo "📱 Cleaning Expo..."
rm -rf .expo
rm -rf web-build
rm -rf dist



# Clean logs
echo "📝 Cleaning logs..."
rm -f *.log
rm -f debug-*.log

# Clean temporary files
echo "🗂️ Cleaning temporary files..."
find . -name "*.tmp" -delete
find . -name "*.temp" -delete
find . -name ".DS_Store" -delete

# Reinstall dependencies
echo "📦 Reinstalling dependencies with Yarn..."
yarn install

echo "✅ React Native cleanup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'yarn start' to start the development server"
echo "2. Run 'yarn ios' or 'yarn android' to run on device/simulator"
echo "3. If issues persist, try 'yarn clean' (if available)" 