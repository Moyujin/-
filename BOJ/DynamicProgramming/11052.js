const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin[0].split(' ').map(Number);
  const num = Array(N + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      num[i] = Math.max(num[i], arr[j - 1] + num[i - j]);
    }
  }
  return num[N];
};

console.log(solution());
