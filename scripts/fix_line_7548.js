import fs from 'fs';

let content = fs.readFileSync('html-css/src/modules/curriculum.js', 'utf8');
content = content.replace(
  'part: \'font-family: "Orbitron",\r\n        code: \'font-family: "Orbitron", monospace;\',',
  'part: \'font-family: "Orbitron", monospace;\',\r\n        code: \'font-family: "Orbitron", monospace;\','
);
content = content.replace(
  'part: \'font-family: "Orbitron",\n        code: \'font-family: "Orbitron", monospace;\',',
  'part: \'font-family: "Orbitron", monospace;\',\n        code: \'font-family: "Orbitron", monospace;\''
);

fs.writeFileSync('html-css/src/modules/curriculum.js', content, 'utf8');
console.log('Fixed line 7548!');
