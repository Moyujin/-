const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const N = Number(fs.readFileSync(filePath).toString().trim());
let cnt = 0;

const solution = () => {
  const arr = Array(N + 1).fill(0);
  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= N; i++) {
    arr[i] = (arr[i - 1] % 15746) + (arr[i - 2] % 15746);
  }
  return arr[N] % 15746;
};

console.log(solution());
