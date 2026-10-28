const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'Chatanya Foods.html'), 'utf-8');

// find signature dish section
const sigIndex = html.indexOf('Our Signature Dishes');
const sub = html.substring(sigIndex, sigIndex + 8000);

const dishMatches = sub.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>[\s\S]*?<img[^>]*src=["']([^"']*)["']/gi);
for (const dm of dishMatches) {
  console.log(dm[1].replace(/<[^>]+>/g, '').trim(), '=>', dm[2]);
}

// Or check all image and surrounding text
console.log('--- ALL SURROUNDING ---');
const regex = /<img[^>]*src=["']([^"']*(?:Untitled_design|Chicken-Manchuria)[^"']*)["'][^>]*>([\s\S]{0,300})/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log('IMG:', match[1]);
  console.log('TEXT AFTER:', match[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}
