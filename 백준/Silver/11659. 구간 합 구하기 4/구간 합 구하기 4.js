const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, M] = stdin.shift().split(' ').map(Number);
  const num = stdin.shift().split(' ').map(Number);
  const sum = Array(N + 1).fill(0);
  num.forEach((item, index) => {
    sum[index + 1] = sum[index] + item;
  });
  const res = [];

  stdin.forEach(item => {
    let [i, j] = item.split(' ').map(Number);
    res.push(sum[j] - sum[i - 1]);
  });
  return res.join('\n');
};

console.log(solution());
