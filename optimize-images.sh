#!/bin/bash

# Image Optimization Script for Thai Fortune Cards
# This script optimizes PNG images to reduce file sizes and improve performance

echo "🎴 Starting image optimization for Thai Fortune Cards..."

# Check if imagemagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick is not installed. Please install it first:"
    echo "   Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "   MacOS: brew install imagemagick"
    echo "   Windows: Download from https://imagemagick.org/script/download.php"
    exit 1
fi

# Check if optipng is installed
if ! command -v optipng &> /dev/null; then
    echo "❌ OptiPNG is not installed. Please install it first:"
    echo "   Ubuntu/Debian: sudo apt-get install optipng"
    echo "   MacOS: brew install optipng"
    exit 1
fi

# Create backup directory
BACKUP_DIR="./original_images_backup"
if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p "$BACKUP_DIR"
    echo "📁 Created backup directory: $BACKUP_DIR"
fi

# Backup original files
echo "💾 Backing up original images..."
cp *.png "$BACKUP_DIR/" 2>/dev/null || echo "⚠️  No PNG files found or backup already exists"

# Optimization parameters
QUALITY=85
MAX_WIDTH=800
MAX_HEIGHT=1200

echo "🔧 Optimization settings:"
echo "   Quality: ${QUALITY}%"
echo "   Max dimensions: ${MAX_WIDTH}x${MAX_HEIGHT}"
echo ""

# Function to optimize a single image
optimize_image() {
    local file="$1"
    local original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    
    echo "📸 Optimizing: $file"
    echo "   Original size: $(($original_size / 1024))KB"
    
    # Resize if too large and optimize
    convert "$file" \
        -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" \
        -strip \
        -quality $QUALITY \
        -define png:compression-level=9 \
        -define png:compression-strategy=2 \
        "${file}.tmp"
    
    # Further optimize with optipng
    optipng -o7 -quiet "${file}.tmp"
    
    # Replace original with optimized version
    mv "${file}.tmp" "$file"
    
    local new_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
    local savings=$((original_size - new_size))
    local percentage=$((savings * 100 / original_size))
    
    echo "   New size: $(($new_size / 1024))KB"
    echo "   Saved: $(($savings / 1024))KB (${percentage}%)"
    echo ""
}

# Get total original size
total_original=0
for file in *.png; do
    if [ -f "$file" ]; then
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        total_original=$((total_original + size))
    fi
done

echo "📊 Total original size: $((total_original / 1024 / 1024))MB"
echo ""

# Optimize all PNG files
for file in *.png; do
    if [ -f "$file" ]; then
        optimize_image "$file"
    fi
done

# Calculate total savings
total_new=0
for file in *.png; do
    if [ -f "$file" ]; then
        size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        total_new=$((total_new + size))
    fi
done

total_saved=$((total_original - total_new))
percentage_saved=$((total_saved * 100 / total_original))

echo "✅ Optimization complete!"
echo ""
echo "📈 Summary:"
echo "   Original total: $((total_original / 1024 / 1024))MB"
echo "   Optimized total: $((total_new / 1024 / 1024))MB"
echo "   Total saved: $((total_saved / 1024 / 1024))MB (${percentage_saved}%)"
echo ""
echo "🚀 Performance improvements:"
echo "   - Faster initial page load"
echo "   - Reduced bandwidth usage"
echo "   - Better mobile experience"
echo "   - Improved SEO scores"
echo ""
echo "📁 Original images backed up to: $BACKUP_DIR"
echo ""
echo "💡 Next steps:"
echo "   1. Test the application to ensure images load correctly"
echo "   2. Consider converting to WebP format for modern browsers"
echo "   3. Implement lazy loading for non-critical images"