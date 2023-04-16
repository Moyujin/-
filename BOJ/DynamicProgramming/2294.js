const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
const MAX = Number.MAX_SAFE_INTEGER;

const count = (arr, visited, N, n, k) => {
  if (n === N) return k === 0 ? 0 : MAX;
  if (visited[n][k] !== -1) return visited[n][k];

  let res = count(arr, visited, N, n + 1, k);

  if (k >= arr[n])
    res = Math.min(res, count(arr, visited, N, n, k - arr[n]) + 1);
  visited[n][k] = res;
  return res;
};

const solution = () => {
  const [N, K] = stdin.shift().split(' ').map(Number);
  const arr = stdin.map(Number);
  const visited = Array.from({ length: N }, () => new Array(K + 1).fill(-1));

  let result = count(arr, visited, N, 0, K);
  if (result === MAX) return -1;
  return result;
};

console.log(solution());

// 바텀업 방식
/*
const solution = () => {
  const MAX = Number.MAX_SAFE_INTEGER;
  const [N, K] = stdin.shift().split(' ').map(Number);
  const arr = stdin.map(Number);
  const visited = Array(K + 1).fill(MAX);
  visited[0] = 0;
  for (let i = 0; i < N; i++) {
    for (let k = arr[i]; k <= K; k++) {
      visited[k] = Math.min(visited[k], visited[k - arr[i]] + 1);
    }
  }

  if (visited[K] === MAX) return -1;
  return visited[K];
};

console.log(solution());
*/
