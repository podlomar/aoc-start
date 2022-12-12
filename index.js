import fs from 'fs';

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  console.log(i, line);
}
