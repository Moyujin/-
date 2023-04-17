const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const recurr = (n, k) => {
  if (k === 0 || k === n) return 1;
  return recurr(n - 1, k) + recurr(n - 1, k - 1);
};

const solution = () => {
  return recurr(N, K);
};

console.log(solution());
