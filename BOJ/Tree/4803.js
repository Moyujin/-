const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const DFS = (graph, visited, N) => {
  const stack = [];
  stack.push([N, N]);

  while (stack.length) {
    let [node, parent] = stack.pop();
    if (visited[node]) continue;
    visited[node] = true;

    for (let leaf of graph[node]) {
      if (visited[leaf] && leaf !== parent) {
        return false;
      }
      stack.push([leaf, node]);
    }
  }

  return true;
};

const solution = () => {
  const res = [];
  let count = 0;
  for (let i = 0; i < stdin.length - 1; i++) {
    let [N, M] = stdin[i].split(' ').map(Number);

    const arr = stdin
      .slice(i + 1, i + M + 1)
      .map(items => items.split(' ').map(Number));
    i = i + M;
    const graph = Array.from(Array(N + 1), () => []);
    const visited = Array(N + 1).fill(false);
    let cnt = 0;

    arr.forEach(item => {
      let [a, b] = item;
      graph[a].push(b);
      graph[b].push(a);
    });

    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      if (!DFS(graph, visited, i)) continue;
      cnt++;
    }

    if (cnt === 0) res.push(`Case ${++count}: No trees.`);
    else if (cnt === 1) res.push(`Case ${++count}: There is one tree.`);
    else res.push(`Case ${++count}: A forest of ${cnt} trees.`);
  }
  return res.join('\n');
};

console.log(solution());
