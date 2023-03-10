const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
let cnt = 0;

const divide = (N, r, c, y, x) => {
    if (N === 0) {
        console.log(cnt);
        return;
    }
    const num = 2 ** (N - 1);
    const pass = num * num;

    if (r < y + num && c < x + num) {
        divide(N - 1, r, c, y, x);
    } else if (r < y + num && x + num <= c) {
        cnt = cnt + pass;
        divide(N - 1, r, c, y, x + num);
    } else if (y + num <= r && c < x + num) {
        cnt = cnt + pass * 2;
        divide(N - 1, r, c, y + num, x);
    } else {
        cnt = cnt + pass * 3;
        divide(N - 1, r, c, y + num, x + num);
    }
};

const solution = () => {
    const [N, r, c] = stdin[0].split(' ').map(Number);

    divide(N, r, c, 0, 0);
};

solution();
