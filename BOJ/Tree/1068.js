const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin[0].split(' ').map(Number);
  const graph = [];
  graph[1] = 0;

  for (let i = 1; i < arr.length; i++) {
    let index = arr.indexOf(arr[i]) * 2 + Math.floor(i / 2);
    graph[index] = i;
  }
  console.log(graph);
};

console.log(solution());
