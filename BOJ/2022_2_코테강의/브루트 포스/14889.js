const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(' ').map(Number);
})();
const num1 = [],
    num2 = [];
let min = Number.MAX_SAFE_INTEGER;

const dfs = (N, idx, arr) => {
    if (idx === N) {
        if (num1.length === N / 2) min = Math.min(min, calculate(N / 2, arr));
        return;
    }

    if (num1.length < N / 2) {
        num1.push(idx);
        dfs(N, idx + 1, arr);
        num1.pop();
    }
    num2.push(idx);
    dfs(N, idx + 1, arr);
    num2.pop();
};

const calculate = (N, arr) => {
    let first = 0,
        second = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            first = first + arr[num1[i]][num1[j]];
            second = second + arr[num2[i]][num2[j]];
        }
    }
    return Math.abs(first - second);
};

function solution() {
    const N = input()[0];
    const arr = Array(N)
        .fill(0)
        .map(() => new Array());
    const visited = Array(N).fill(false);
    const result = [];
    let sum;

    for (let i = 0; i < N; i++) {
        const num = input();
        num.forEach((item) => arr[i].push(item));
    }

    dfs(N, 0, arr);

    console.log(min);
}

solution();
