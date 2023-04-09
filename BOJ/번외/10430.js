const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const solution = () => {
  const res = [];
  res.push((A + B) % C);
  res.push(((A % C) + ((B % C) % C)) % C);
  res.push((A * B) % C);
  res.push(((A % C) * (B % C)) % C);

  return res.join('\n');
};

console.log(solution());
