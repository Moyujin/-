const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
let res = 1;

const DFS = (y, x, R, C, arr, visited, check, cnt) => {
  res = Math.max(res, cnt);
  let idx = arr[y][x].charCodeAt(0) - 65;
  check[idx] = true;
  visited[y][x] = true;

  for (let i = 0; i < 4; i++) {
    let fy = y + dy[i];
    let fx = x + dx[i];

    if (fy < 0 || fx < 0 || fy >= R || fx >= C || visited[fy][fx]) continue;
    if (!check[arr[fy][fx].charCodeAt(0) - 65])
      DFS(fy, fx, R, C, arr, visited, check, cnt + 1);
  }

  check[idx] = false;
  visited[y][x] = false;
};

const solution = () => {
  const [R, C] = stdin[0].split(' ').map(Number);
  const arr = stdin.slice(1).map(item => item.split(''));
  const visited = Array.from({ length: R }, () => new Array(C));
  const check = Array(26).fill(false);

  DFS(0, 0, R, C, arr, visited, check, 1);

  return res;
};

console.log(solution());
