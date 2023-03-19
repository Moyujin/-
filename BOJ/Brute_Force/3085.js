const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const compare = (arr, N) => {
  let res = 0;

  for (let y = 0; y < N; y++) {
    let cnt = 1;
    for (let x = 0; x < N - 1; x++) {
      if (arr[y][x] !== arr[y][x + 1]) {
        res = Math.max(res, cnt);
        cnt = 1;
      } else cnt++;
    }
    res = Math.max(res, cnt);
  }

  for (let x = 0; x < N; x++) {
    let cnt = 1;
    for (let y = 0; y < N - 1; y++) {
      if (arr[y][x] !== arr[y + 1][x]) {
        res = Math.max(res, cnt);
        cnt = 1;
      } else cnt++;
    }
    res = Math.max(res, cnt);
  }
  return res;
};

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin.map(value => value.split(''));
  let res = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N - 1; x++) {
      if (res === N) {
        break;
      }
      let temp = arr[y][x];
      arr[y][x] = arr[y][x + 1];
      arr[y][x + 1] = temp;
      res = Math.max(res, compare(arr, N));
      arr[y][x + 1] = arr[y][x];
      arr[y][x] = temp;

      if (N <= y + 1) continue;
      arr[y][x] = arr[y + 1][x];
      arr[y + 1][x] = temp;
      res = Math.max(res, compare(arr, N));
      arr[y + 1][x] = arr[y][x];
      arr[y][x] = temp;
    }
  }
  console.log(res);
};

solution();
