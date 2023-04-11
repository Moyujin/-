const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const N = Number(stdin);
  const arr = Array(N + 1).fill(0);
  arr[2] = 1;

  for (let i = 3; i <= N; i++) {
    let num1 = (num2 = num3 = Number.MAX_SAFE_INTEGER);
    if (i % 3 === 0) num1 = arr[Math.floor(i / 3)] + 1;
    if (i % 2 === 0) num2 = arr[Math.floor(i / 2)] + 1;
    num3 = arr[i - 1] + 1;

    arr[i] = Math.min(num1, Math.min(num2, num3));
  }
  return arr[N];
};

console.log(solution());
