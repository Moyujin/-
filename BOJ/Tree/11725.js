const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const BFS = (graph, N) => {
  const queue = [];
  const visited = Array(N + 1).fill(false);
  const arr = [];

  queue.push(1);
  while (queue.length) {
    let node = queue.shift();
    if (visited[node]) continue;
    visited[node] = true;

    for (let child of graph[node]) {
      if (visited[child]) continue;
      queue.push(child);
      arr[child] = node;
    }
  }
  return arr.slice(2).join('\n');
};

const solution = () => {
  const N = Number(stdin.shift());

  const graph = Array.from(Array(N + 1), () => new Array());
  for (let i = 0; i < N - 1; i++) {
    const [N, M] = stdin[i].split(' ').map(Number);
    graph[N].push(M);
    graph[M].push(N);
  }
  return BFS(graph, N);
};

console.log(solution());
