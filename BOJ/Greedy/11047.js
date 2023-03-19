const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let [N, K] = stdin.shift().split(' ').map(Number);
  const arr = stdin.map(item => Number(item)).sort((a, b) => b - a);
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    cnt = cnt + Math.floor(K / arr[i]);
    K = K % arr[i];
  }
  return cnt;
};

console.log(solution());
