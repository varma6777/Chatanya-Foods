const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'Chatanya Foods.html'), 'utf-8');

// Strip tags and extract text
function stripTags(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
}

const lines = stripTags(html);
fs.writeFileSync('extracted_lines.txt', lines.join('\n'));

// Extract interesting segments like phone numbers, addresses, headings, menu
const headings = [];
const hMatches = html.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi);
for (const match of hMatches) {
  headings.push({ level: match[1], text: match[2].replace(/<[^>]+>/g, '').trim() });
}

// Extract links
const links = [];
const aMatches = html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi);
for (const match of aMatches) {
  links.push({ href: match[1], text: match[2].replace(/<[^>]+>/g, '').trim() });
}

fs.writeFileSync('extracted_analysis.json', JSON.stringify({ headings, links: links.filter(l => l.text) }, null, 2));

console.log('Done extracting. Total lines:', lines.length, 'Headings:', headings.length);
