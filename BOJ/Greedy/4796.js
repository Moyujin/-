const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const res = [];
  for (let i = 0; i < stdin.length - 1; i++) {
    let [L, P, V] = stdin[i].split(' ').map(Number);

    let quotient = Math.floor(V / P) * L;
    let remainder = V % P < L ? V % P : L;
    res.push(`Case ${i + 1}: ${quotient + remainder}`);
  }
  console.log(res.join('\n'));
};
solution();
