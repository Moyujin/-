const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, H] = stdin.shift().split(' ').map(BigInt);
  const arr = stdin.map(item => item.split(' ').map(BigInt));

  let low = 1n;
  let high = BigInt(1.3e18);

  while (low <= high) {
    let mid = (high + low) / 2n;
    let hp = mid;
    let cnt = 0n;
    let attack = H;

    for (let i = 0; i < N; i++) {
      let [t, a, h] = arr[i];
      if (t === 1n) {
        cnt = h / attack;
        if (h % attack === 0n) cnt = cnt - 1n;
        hp = hp - cnt * a;
      } else {
        hp = mid >= hp + h ? hp + h : mid;
        attack = attack + a;
      }
      if (hp <= 0) break;
    }

    if (hp > BigInt(0)) {
      high = mid - 1n;
    } else low = mid + 1n;
  }

  return low.toString();
};

console.log(solution());
