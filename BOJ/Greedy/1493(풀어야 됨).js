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

  for (let i = arr.length; i >= 0; i--) {
    let num = i * i;
    let len = num * i;
    console.log(num, len);
    for (let j = 0; j < arr[i]; j++) {
      if (num <= length && num <= width && num <= height) {
      }
    }
  }
};

console.log(solution());
