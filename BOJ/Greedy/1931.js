const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let N = Number(stdin.shift());
  const arr = stdin
    .map(item => item.split(' ').map(Number))
    .sort((a, b) => {
      if (a[1] - b[1] > 0) {
        return 1;
      } else if (a[1] - b[1] < 0) {
        return -1;
      } else {
        return a[0] - b[0];
      }
    });
  let cnt = 0,
    time = 0;

  for (let i = 0; i < N; i++) {
    const [start, end] = arr[i];
    if (start < time) continue;
    time = end;
    cnt++;
  }
  return cnt;
};

console.log(solution());
