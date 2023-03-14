const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(stdin[0]);
  let res, num;
  let check = false;

  for (let i = 0; i <= N; i++) {
    res = num = i;
    while (num > 0) {
      res += Math.floor(num % 10);
      num /= 10;
    }
    if (res === N) {
      console.log(i);
      check = true;
      break;
    }
  }

  if (!check) console.log(0);
};

solution();
