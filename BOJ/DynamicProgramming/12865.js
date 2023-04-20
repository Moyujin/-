const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++].split(' ').map(Number);
})();

const solution = () => {
  const [N, K] = input();
  const value = Array(K + 1).fill(0);
  for (let i = 0; i < N; i++) {
    const [W, V] = input();
    for (let j = K; j >= W; j--) {
      value[j] = Math.max(value[j], value[j - W] + V);
    }
  }
  return value[K];
};

console.log(solution());
