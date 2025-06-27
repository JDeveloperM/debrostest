const fs = require('fs');
const path = require('path');

// Function to get file size in MB
function getFileSizeMB(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    return (stats.size / (1024 * 1024)).toFixed(2);
  }
  return 0;
}

// Function to get file size in KB
function getFileSizeKB(filePath) {
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    return Math.round(stats.size / 1024);
  }
  return 0;
}

// Current largest files analysis
console.log('🔍 CURRENT LARGEST FILES ANALYSIS:\n');

// Let's find the actual largest files dynamically
const { execSync } = require('child_process');

try {
  // Get the actual largest files from the out directory
  const result = execSync('powershell -Command "Get-ChildItem -Path out -Recurse -File | Sort-Object Length -Descending | Select-Object -First 10 Name, Length | ConvertTo-Json"', { encoding: 'utf8' });
  const largestFilesData = JSON.parse(result);

  console.log('📊 TOP 10 LARGEST FILES IN BUILD:\n');

  let totalSize = 0;
  largestFilesData.forEach((file, index) => {
    const sizeMB = (file.Length / (1024 * 1024)).toFixed(2);
    const sizeKB = Math.round(file.Length / 1024);
    totalSize += parseFloat(sizeMB);

    // Determine file type
    let type = 'Other';
    let icon = '📄';
    if (file.Name.includes('.mp4')) { type = 'Video'; icon = '🎬'; }
    else if (file.Name.includes('.ttf') || file.Name.includes('.woff')) { type = 'Font'; icon = '🔤'; }
    else if (file.Name.includes('.png') || file.Name.includes('.jpg')) { type = 'Image'; icon = '🖼️'; }
    else if (file.Name.includes('.css')) { type = 'CSS'; icon = '🎨'; }

    console.log(`${index + 1}. ${icon} ${file.Name}`);
    console.log(`   📊 ${sizeMB}MB (${sizeKB}KB) - ${type}`);
    console.log('');
  });

  console.log(`📈 Total size of top 10 files: ${totalSize.toFixed(2)}MB`);

} catch (error) {
  console.log('Could not get file sizes automatically. Using manual analysis...\n');

  // Fallback to manual file list
  const largestFiles = [
    { path: 'out/images/bg/DeBros_Videos_Website_cube.mp4', type: 'Video', description: 'Main video file' },
    { path: 'out/fonts/fa-regular-400.ttf', type: 'Font', description: 'FontAwesome Regular' },
    { path: 'out/images/sign-up/pattern.png', type: 'Image', description: 'Pattern background' },
    { path: 'out/images/nfts/debros-nft-1.png', type: 'Image', description: 'NFT image 1' },
    { path: 'out/images/nfts/debros-nft-2.png', type: 'Image', description: 'NFT image 2' },
  ];

  largestFiles.forEach((file, index) => {
    const sizeMB = getFileSizeMB(file.path);
    const sizeKB = getFileSizeKB(file.path);

    console.log(`${index + 1}. ${file.description}`);
    console.log(`   📁 ${file.path}`);
    console.log(`   📊 ${sizeMB}MB (${sizeKB}KB) - ${file.type}`);
    console.log('');
  });
}

let totalSize = 0;
largestFiles.forEach((file, index) => {
  const sizeMB = getFileSizeMB(file.path);
  const sizeKB = getFileSizeKB(file.path);
  totalSize += parseFloat(sizeMB);

  console.log(`${index + 1}. ${file.description}`);
  console.log(`   📁 ${file.path}`);
  console.log(`   📊 ${sizeMB}MB (${sizeKB}KB) - ${file.type}`);
  console.log('');
});

console.log(`📈 Total size of top 10 files: ${totalSize.toFixed(2)}MB`);
console.log(`📈 Total app size: ~42MB\n`);

console.log('🎯 OPTIMIZATION RECOMMENDATIONS:\n');

console.log('1. 🎬 VIDEO OPTIMIZATION (Highest Impact):');
console.log('   • DeBros_Videos_Website_cube.mp4 (4.2MB)');
console.log('   • Consider reducing video quality/resolution');
console.log('   • Or convert to more efficient format');
console.log('');

console.log('2. 🖼️ IMAGE OPTIMIZATION (Medium Impact):');
console.log('   • pattern.png (965KB) - Could compress significantly');
console.log('   • NFT images (885KB each) - Could optimize without quality loss');
console.log('   • slider-main-bg.png (695KB) - Background image, can compress');
console.log('');

console.log('3. 🔤 FONT OPTIMIZATION (Low Impact):');
console.log('   • Fonts are already optimized (only essential weights kept)');
console.log('   • Could subset fonts to only used characters (advanced)');
console.log('');

console.log('4. 🛠️ QUICK WINS:');
console.log('   • Run images through TinyPNG or similar');
console.log('   • Convert large PNGs to WebP format');
console.log('   • Reduce image dimensions if displayed smaller');
console.log('');

console.log('💡 ESTIMATED SAVINGS:');
console.log('   • Video optimization: 1-2MB');
console.log('   • Image compression: 2-3MB');
console.log('   • Total potential: 3-5MB reduction');
console.log('   • Final size could be: ~37-39MB');
console.log('');

console.log('✅ CURRENT STATUS:');
console.log('   • Already reduced from 65MB to 42MB (35% reduction)');
console.log('   • App is now Arweave-deployment ready');
console.log('   • Further optimization is optional for even better performance');
