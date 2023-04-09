const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const calculate = (A, B, C) => {
  if (B === 1n) return A % C;

  let num = calculate(A, B / 2n, C);
  num = (num * num) % C;

  if (B % 2n === BigInt(0)) return num;
  return (num * (A % C)) % C;
};

const solution = () => {
  return calculate(A, B, C).toString();
};
console.log(solution());
