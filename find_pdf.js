const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.join(__dirname, 'Chatanya Foods.html'), 'utf-8');

const regex = /(?:href|src)=["']([^"']*(?:pdf|menu|drive|flip|zomato|swiggy)[^"']*)["']/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[1]);
}
