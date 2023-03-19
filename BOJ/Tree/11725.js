const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const BFS = graph => {
  const queue = [];
};

const solution = () => {
  const N = Number(stdin.shift());

  const graph = Array.from(Array(N + 1), () => new Array());
  for (let i = 0; i < N - 1; i++) {
    const [N, M] = stdin[i].split(' ').map(Number);
    graph[N].push(M);
    graph[M].push(N);
  }
  BFS();
};

console.log(solution());
