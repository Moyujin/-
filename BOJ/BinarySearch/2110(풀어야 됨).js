const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, C] = stdin.shift().split(' ').map(Number);
  const arr = stdin.map(Number).sort((a, b) => a - b);
  console.log(arr);

  let low = arr[0];
  let high = arr.at(-1);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let cnt = 0;
    for (let i = 1; i < N; i++) {}
  }
  console.log(low, high);
};

console.log(solution());
