const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(item => Number(item));

const check = (arr, num) => {
  let len = arr.length;
  for (let i = 0; i < 44; i++) {
    for (let j = 0; j < 44; j++) {
      for (let k = 0; k < 44; k++) {
        if (arr[i] + arr[j] + arr[k] === num) return 1;
      }
    }
  }
  return 0;
};

const solution = () => {
  const N = stdin.shift();
  const arr = [];

  for (let i = 1; i <= 44; i++) {
    arr.push((i * (i + 1)) / 2);
  }

  stdin.map(item => console.log(check(arr, item)));
};

solution();
