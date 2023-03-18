const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const check = (data, N) => {
  for (let i = 0; i < N; i++) {
    const [num, strike, ball] = stdin[i].split(' ');
    let s = 0,
      b = 0;

    for (let j = 0; j < 3; j++) {
      if (data[j] === num[j]) s++;
      else if (data.includes(num[j])) b++;
    }

    if (s !== Number(strike) || b !== Number(ball)) return false;
  }
  return true;
};

const solution = () => {
  const N = +stdin.shift();
  let cnt = 0;

  const [t, S, B] = stdin.map(item =>
    item.split(' ').map((item, i) => (i ? +item : item)),
  );

  for (let i = 123; i <= 987; i++) {
    let num = i.toString().split('');
    if (num[0] === num[1] || num[0] === num[2] || num[1] === num[2]) continue;
    if (num.includes('0')) continue;

    if (check(num, N)) cnt++;
  }
  console.log(cnt);
};

solution();
