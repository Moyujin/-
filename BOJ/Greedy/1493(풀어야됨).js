const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [length, width, height] = stdin.shift().split(' ').map(Number);
  const N = Number(stdin.shift());
  const arr = [];

  for (let i = 0; i < N; i++) {
    const [_, num] = stdin[i].split(' ').map(Number);
    arr.push(num);
  }

  console.log(arr);
};

console.log(solution());
