const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [S, N, ...str] = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  let len = S.length;
  N = +N;
  const arr = Array(len + 1).fill(0);
  arr[0] = 1;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i] === 0) continue;

      if (S.indexOf(str[j], i) === i) arr[i + str[j].length] = 1;
    }
  }

  return arr[len];
};

console.log(solution());
