const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, K] = stdin.shift().split(' ').map(Number);
  const arr = stdin[0].split(' ').map(Number);
  const plug = [];
  let cnt = 0;

  arr.forEach((item, index) => {
    if (plug.length !== N && !plug.includes(item)) plug.push(item);
    else if (plug.includes(item));
    else {
      let max = Number.MIN_SAFE_INTEGER,
        maxIdx;
      plug.forEach((item, idx) => {
        let num = arr.indexOf(item, index + 1);
        if (num === -1) {
          max = Number.MAX_SAFE_INTEGER;
          maxIdx = idx;
        } else if (max < num) {
          max = num;
          maxIdx = idx;
        }
      });

      plug[maxIdx] = item;
      cnt++;
    }
  });

  return cnt;
};

console.log(solution());
