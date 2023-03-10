const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = 0;

const divide = (N, r, c, y, x) => {
    if (y === r && x === c) {
        console.log(cnt);
        return;
    }
    let num = N / 2;
    if (y <= r && r < y + N && x <= c && c < x + N) {
        divide(num, r, c, y, x);
        divide(num, r, c, y, x + num);
        divide(num, r, c, y + num, x);
        divide(num, r, c, y + num, x + num);
    } else cnt = cnt + N * N;
};

const solution = () => {
    const [N, r, c] = stdin[0].split(' ').map(Number);

    divide(2 ** N, r, c, 0, 0);
};

solution();
