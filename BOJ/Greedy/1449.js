const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, L] = stdin[0].split(' ').map(Number);
  const arr = stdin[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let cnt = 0;
  let num = 0;

  for (let i = 0; i < N; i++) {
    if (arr[i] <= num) continue;
    num = arr[i] + L - 1;
    cnt++;
  }
  return cnt;
};

console.log(solution());
