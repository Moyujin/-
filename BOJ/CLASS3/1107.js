const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const check = (num, arr) => {
  return num
    .split('')
    .map(item => arr.includes(Number(item)))
    .includes(true);
};

const solution = () => {
  const N = Number(stdin[0]);
  const M = stdin[1];
  let arr = [];
  if (M !== '0') arr = stdin[2].split(' ').map(Number);
  let min = Math.abs(N - 100);

  for (let i = 0; i < 1_000_000; i++) {
    let num = String(i);
    if (!check(num, arr)) {
      min = Math.min(
        min,
        Math.min(Math.abs(N - 100), Math.abs(i - N) + num.length),
      );
    }
  }
  console.log(min);
};

solution();
