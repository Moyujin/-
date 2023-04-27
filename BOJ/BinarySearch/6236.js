const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, C] = stdin.shift().split(' ').map(Number);
  const arr = stdin.map(Number);

  let low = Math.max(...arr);
  let high = arr.reduce((acc, curr) => acc + curr);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let sum = 0,
      cnt = 1;
    for (let i = 0; i < N; i++) {
      if (sum + arr[i] > mid) {
        cnt = cnt + 1;
        sum = 0;
      }
      sum = sum + arr[i];
    }

    if (cnt > C) low = mid + 1;
    else high = mid - 1;
  }

  return low;
};

console.log(solution());
