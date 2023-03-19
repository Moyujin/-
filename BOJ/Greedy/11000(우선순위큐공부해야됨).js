const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let N = Number(stdin.shift());
  const arr = stdin
    .map(item => item.split(' ').map(Number))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });
  const cnt = [];

  for (let i = 0; i < N; i++) {
    const [start, end] = arr[i];
    let check = false;
    for (let j = 0; j < cnt.length; j++) {
      if (cnt[j] <= start) {
        cnt[j] = end;
        check = true;
        break;
      }
    }
    if (!check) {
      cnt.push(end);
    }
  }
  return cnt.length;
};

console.log(solution());
