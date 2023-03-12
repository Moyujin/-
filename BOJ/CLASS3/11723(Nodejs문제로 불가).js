// 현재 nodejs로 풀 수 없는 문제

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const M = Number(stdin.shift());
  let set = new Set();

  for (let i = 0; i < M; i++) {
    const [cmd, num] = stdin[i]
      .split(' ')
      .map((item, idx) => (idx === 1 ? Number(item) : item));
    if (cmd === 'add') set.add(num);
    else if (cmd === 'remove') set.delete(num);
    else if (cmd === 'check') {
      console.log(set.has(num) ? 1 : 0);
    } else if (cmd === 'toggle') set.has(num) ? set.delete(num) : set.add(num);
    else if (cmd === 'all') {
      set = new Set(
        Array(20)
          .fill(0)
          .map((v, index) => ++index),
      );
    } else set.clear();
  }
};

solution();
