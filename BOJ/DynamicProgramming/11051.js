const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, K] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const recursive = (arr, n, k) => {
  if (k === 0 || k === n) return 1;
  if (arr[n][k] !== 0) return arr[n][k];
  arr[n][k] = (recursive(arr, n - 1, k) + recursive(arr, n - 1, k - 1)) % 10007;
  return arr[n][k];
};

const solution = () => {
  const arr = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));
  return recursive(arr, N, K);
};

console.log(solution());
