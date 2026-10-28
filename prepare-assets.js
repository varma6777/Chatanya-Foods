const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'Chatanya Foods_files');
const destDir = path.join(__dirname, 'Frontend', 'public', 'assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const fileMap = {
  'ccccc222-1.png': 'logo.png',
  'fresh-gourmet-meal-beef-taco-salad-plate-generated-by-ai-1920x1097.jpg': 'hero-1.jpg',
  'top-view-circular-food-frame-1920x1280.jpg': 'hero-2.jpg',
  'jpeg-optimizer_indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table-1920x661.jpg': 'hero-3.jpg',
  'Untitled-design-47.png': 'about-dish.png',
  'Untitled_design__57_-removebg-preview-1.png': 'sambar-rice.png',
  'Untitled_design__55_-removebg-preview.png': 'mint-biryani.png',
  'Untitled_design__58_-removebg-preview.png': 'avakaya-mutton.png',
  'Untitled_design__54_-removebg-preview.png': 'golconda-prawns.png',
  'Untitled_design__51_-removebg-preview.png': 'ulavacharu-prawns.png',
  'Untitled_design__52_-removebg-preview.png': 'ulavacharu-chicken.png',
  'Untitled_design__56_-removebg-preview.png': 'matka-kodi.png',
  'Untitled_design__59_-removebg-preview.png': 'ulavacharu-veg.png',
  'Chicken-Manchuria-950x935.png': 'chicken-manchuria.png',
  'WhatsAppImage2024-05-30at02.45.29-768x1024.jpeg': 'gallery-1.jpg',
  'WhatsAppImage2024-05-30at02.45.33-768x1024.jpeg': 'gallery-2.jpg',
  'WhatsAppImage2024-05-30at02.45.34-768x1024.jpeg': 'gallery-3.jpg',
  'WhatsAppImage2024-05-30at02.45.342-768x1024.jpeg': 'gallery-4.jpg',
  'WhatsAppImage2024-05-30at02.45.35-768x1024.jpeg': 'gallery-5.jpg',
  'WhatsAppImage2024-05-30at02.45.36-768x1024.jpeg': 'gallery-6.jpg',
  'WhatsAppImage2024-05-30at02.45.38-768x1024.jpeg': 'gallery-7.jpg',
  'WhatsAppImage2024-05-30at02.45.381-768x1024.jpeg': 'gallery-8.jpg',
  'icon-serv-1.png': 'icon-serv-1.png',
  'icon-serv-2.png': 'icon-serv-2.png',
  'icon-serv-3.png': 'icon-serv-3.png',
  '20220404_214008-removebg-preview-e1743608982183.png': 'founder.png'
};

for (const [srcName, destName] of Object.entries(fileMap)) {
  const p = path.join(srcDir, srcName);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(destDir, destName));
    console.log(`Copied: ${srcName} -> ${destName}`);
  } else {
    console.warn(`File not found: ${srcName}`);
  }
}

// Also copy menu pages
['menu-page-1.jpg', 'menu-page-2.png', 'menu-page-3.jpg', 'menu-page-4.jpg'].forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(destDir, f));
    console.log(`Copied menu page: ${f}`);
  }
});

console.log('Asset copying complete!');
