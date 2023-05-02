const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const histogram = (arr, start, end) => {
  if (start === end) return 0;
  if (start + 1 === end) return arr[start];

  const mid = Math.floor((start + end) / 2);
  let max = Math.max(histogram(arr, start, mid), histogram(arr, mid, end));

  let s = (e = mid),
    height = arr[mid],
    len = 2;

  while (e - s + 1 < end - start) {
    let left =
      start < s ? Math.min(height, arr[s - 1]) : Number.MIN_SAFE_INTEGER;
    let right =
      e + 1 < end ? Math.min(height, arr[e + 1]) : Number.MIN_SAFE_INTEGER;
    if (left >= right) {
      height = left;
      s--;
    } else {
      height = right;
      e++;
    }
    max = Math.max(max, len++ * height);
  }
  return max;
};

const solution = () => {
  const N = stdin.shift();
  const arr = stdin.map(Number);
  return histogram(arr, 0, arr.length);
};

console.log(solution());