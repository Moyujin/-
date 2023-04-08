const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const divide = (arr, N, dy, dx, res) => {
  let check = true;
  let num = arr[dy][dx];

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (arr[dy + y][dx + x] !== num) {
        check = false;
        break;
      }
    }

    if (!check) break;
  }

  if (check) {
    if (num === '-1') res[0] = res[0] + 1;
    else if (num === '0') res[1] = res[1] + 1;
    else res[2] = res[2] + 1;
    return res;
  }

  let div = N / 3;

  for (let i = 0; i < N; i += div) {
    for (let j = 0; j < N; j += div) {
      divide(arr, N / 3, dy + i, dx + j, res);
    }
  }

  return res;
};

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin.map(items => items.split(' '));
  let res = Array(3).fill(0);

  return divide(arr, N, 0, 0, res).join('\n');
};

console.log(solution());
