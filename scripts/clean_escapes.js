import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');

// Replace any double-escaped \' inside single-quoted strings
content = content.replace(/\\{2,}'/g, "\\'");

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Fixed escaped quotes in curriculum.js');
