const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let N = fs.readFileSync(filePath).toString().trim();
N = +N;
const res = [];
let cnt = 0;
const hanoi = (N, start, mid, end) => {
  if (N === 1) {
    return res.push(`${start} ${end}`);
  }
  hanoi(N - 1, start, end, mid);
  res.push(`${start} ${end}`);
  hanoi(N - 1, mid, start, end);
  return res;
};

const solution = () => {
  hanoi(N, 1, 2, 3);
  console.log(res.length);
  return res.join('\n');
};

console.log(solution());
