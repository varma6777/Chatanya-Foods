const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'Chatanya Foods.html'), 'utf-8');

const imgMatches = html.matchAll(/<img[^>]*src=["']([^"']*)["'][^>]*alt=["']?([^"'>]*)["']?[^>]*>/gi);
const imagesFound = [];
for (const m of imgMatches) {
  imagesFound.push({ src: m[1], alt: m[2] });
}

console.log(JSON.stringify(imagesFound, null, 2));
