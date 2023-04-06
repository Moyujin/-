const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const recursive = (arr, start, end) => {
  if (start === end) return 0;
  if (start + 1 === end) return arr[start] ** 2;

  const mid = Math.floor((start + end) / 2);
  let max = Math.max(recursive(arr, start, mid), recursive(arr, mid, end));
  let s = (e = mid);
  let min = (sum = arr[mid]);

  while (e - s + 1 < end - start) {
    let left = start < s ? arr[s - 1] : 0;
    let right = e + 1 < end ? arr[e + 1] : 0;

    if (left >= right) {
      min = Math.min(min, left);
      sum = sum + left;
      s--;
    } else {
      min = Math.min(min, right);
      sum = sum + right;
      e++;
    }
    max = Math.max(max, sum * min);
  }
  return max;
};

const solution = () => {
  const N = Number(stdin.shift());
  const arr = stdin[0].split(' ').map(Number);
  return recursive(arr, 0, N);
};

console.log(solution());
