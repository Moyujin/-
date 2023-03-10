const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const fibonacci = (num) => {
    const arr = Array.from({ length: 41 }, () => new Array(2).fill(0));

    arr[0][0] = 1;
    arr[0][1] = 0;
    arr[1][0] = 0;
    arr[1][1] = 1;

    for (let i = 2; i <= num; i++) {
        arr[i][0] = arr[i - 1][0] + arr[i - 2][0];
        arr[i][1] = arr[i - 1][1] + arr[i - 2][1];
    }

    return arr[num][0] + ' ' + arr[num][1];
};

const solution = () => {
    const N = Number(stdin.shift());
    const arr = stdin.map(Number);
    const res = [];
    for (let i = 0; i < N; i++) {
        res.push(fibonacci(arr[i]));
    }
    console.log(res.join('\n'));
};

solution();
