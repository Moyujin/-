const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const DFS = (graph, root, N) => {
  const stack = [];
  stack.push(root);
  let cnt = 0;
  if (root === N) return cnt;
  while (stack.length) {
    let node = stack.pop();

    if (graph[node].length === 0) {
      cnt = cnt + 1;
      continue;
    }

    for (let leaf of graph[node]) {
      if (leaf === N) {
        if (graph[node].length === 1) cnt = cnt + 1;
        continue;
      }
      stack.push(leaf);
    }
  }
  return cnt;
};

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin[0].split(' ').map(Number);
  const graph = Array.from(Array(51), () => new Array());
  let root = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] === -1) root = i;
    else graph[arr[i]].push(i);
  }

  return DFS(graph, root, Number(stdin[1]));
};

console.log(solution());
