// 🚨 EMERGENCY: Get Under 100GB Limit
// Current: 252GB / 100GB (152GB OVER!)

const fs = require('fs');
const path = require('path');

console.log('🚨 EMERGENCY BANDWIDTH OPTIMIZATION');
console.log('Current: 252GB / 100GB (152GB over limit!)');
console.log('Target: Under 100GB');
console.log('=====================================');

// Calculate current image usage
function analyzeFolder(folderPath, folderName) {
  if (!fs.existsSync(folderPath)) return { totalMB: 0, files: [] };
  
  const files = fs.readdirSync(folderPath);
  let totalMB = 0;
  const fileData = [];
  
  files.forEach(file => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isFile()) {
      const stats = fs.statSync(filePath);
      const sizeMB = stats.size / (1024 * 1024);
      totalMB += sizeMB;
      if (sizeMB > 0.1) {
        fileData.push({ name: file, sizeMB: sizeMB.toFixed(2) });
      }
    }
  });
  
  return { totalMB: totalMB.toFixed(2), files: fileData };
}

// Analyze all folders
const folders = [
  { path: './public/slider', name: 'Slider Images', priority: 1 },
  { path: './public/ImportantPersons', name: 'Person Photos', priority: 2 },
  { path: './public/logos', name: 'Logos', priority: 3 },
  { path: './public/places', name: 'Places', priority: 3 },
  { path: './public/Sponser Logos', name: 'Sponsor Logos', priority: 3 }
];

let totalImageMB = 0;
console.log('\n📊 CURRENT IMAGE BREAKDOWN:');

folders.forEach(folder => {
  const analysis = analyzeFolder(folder.path, folder.name);
  totalImageMB += parseFloat(analysis.totalMB);
  
  console.log(`\n${folder.name}: ${analysis.totalMB}MB (Priority ${folder.priority})`);
  analysis.files.forEach(file => {
    console.log(`  ${file.name}: ${file.sizeMB}MB`);
  });
});

console.log(`\n📈 TOTAL IMAGES: ${totalImageMB.toFixed(2)}MB`);

// Optimization plan
console.log('\n🎯 AGGRESSIVE OPTIMIZATION PLAN:');
console.log('Target reduction: 90-95% of image sizes');
console.log('');
console.log('PRIORITY 1 - SLIDER IMAGES (~78MB → 3MB):');
console.log('• Resize: 1200x675 (from ~4000px)');
console.log('• Format: WebP at 70% quality');
console.log('• Target: 200-300KB each');
console.log('• Savings: ~75MB');
console.log('');
console.log('PRIORITY 2 - PERSON PHOTOS (~15MB → 2MB):');
console.log('• Resize: 300x300 max');
console.log('• Format: WebP at 75% quality');
console.log('• Target: 40-50KB each');
console.log('• Savings: ~13MB');
console.log('');
console.log('PRIORITY 3 - LOGOS/OTHERS (~10MB → 1MB):');
console.log('• Use SVG where possible');
console.log('• Optimize PNG/WebP');
console.log('• Target: 20-50KB each');
console.log('• Savings: ~9MB');

const projectedSavings = totalImageMB * 0.93;
const newImageTotal = totalImageMB - projectedSavings;

console.log(`\n💰 PROJECTED RESULTS:`);
console.log(`Image savings: ${projectedSavings.toFixed(2)}MB`);
console.log(`New image total: ${newImageTotal.toFixed(2)}MB`);
console.log(`Bandwidth reduction: ~60-80%`);
console.log(`Expected new total: 50-80GB (UNDER 100GB!)`);

console.log('\n🔥 DO THIS NOW (Step by step):');
console.log('');
console.log('STEP 1: Backup images');
console.log('• Copy public folder to backup location');
console.log('');
console.log('STEP 2: Optimize slider images (biggest impact)');
console.log('• Go to squoosh.app');
console.log('• Upload slide1.jpg');
console.log('• Settings: Resize to 1200px width, WebP, 70% quality');
console.log('• Download and replace original');
console.log('• Repeat for all 10 slider images');
console.log('');
console.log('STEP 3: Batch optimize person photos');
console.log('• Use TinyPNG.com for batch processing');
console.log('• Or use squoosh.app: 300x300, WebP, 75%');
console.log('');
console.log('STEP 4: Test and deploy');
console.log('• Check site still works');
console.log('• Deploy and monitor bandwidth');

console.log('\n⚡ TOOLS:');
console.log('• squoosh.app - Best for individual files');
console.log('• tinypng.com - Good for batch processing');
console.log('• imageoptim.com - Desktop app for bulk');

console.log('\n🎯 SUCCESS METRICS:');
console.log('• Slider folder: 78MB → 3MB');
console.log('• Total bandwidth: 252GB → <100GB');
console.log('• Page load time: 3-5x faster');
console.log('• Stay within free tier limits!');