import fs from 'fs';

const lines = fs.readFileSync('random.txt', 'utf-8').split('\n');

let sum = 0;
let max = 0;

for (let i = 0; i < lines.length; i++) {
  const num = Number(lines[i]);
  sum += num;
  if (num > max) {
    max = num;
  }
}

console.log(sum, max);
