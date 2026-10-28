const fs = require('fs');

function extract(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const html = fs.readFileSync(filePath, 'utf-8');
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .split('\n')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.includes('casino') && !s.includes('drückglück') && !s.includes('1win') && !s.includes('vox casino'))
    .join('\n');
}

const about = extract('C:/Users/varma/.gemini/antigravity-ide/brain/82beb2fe-ce06-43b7-a33c-298ac9d3b2f8/.system_generated/steps/80/content.md');
const catering = extract('C:/Users/varma/.gemini/antigravity-ide/brain/82beb2fe-ce06-43b7-a33c-298ac9d3b2f8/.system_generated/steps/81/content.md');
const locations = extract('C:/Users/varma/.gemini/antigravity-ide/brain/82beb2fe-ce06-43b7-a33c-298ac9d3b2f8/.system_generated/steps/83/content.md');
const contact = extract('C:/Users/varma/.gemini/antigravity-ide/brain/82beb2fe-ce06-43b7-a33c-298ac9d3b2f8/.system_generated/steps/84/content.md');

fs.writeFileSync('extracted_pages_clean.txt', `=== ABOUT ===\n${about}\n\n=== CATERING ===\n${catering}\n\n=== LOCATIONS ===\n${locations}\n\n=== CONTACT ===\n${contact}`);
console.log('Done extracting clean pages text.');
