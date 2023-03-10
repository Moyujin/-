const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(' ').map(Number);
})();

const dfs = (idx, sum, N, number, operator) => {
    if (idx === N - 1) {
        max = max > sum ? max : sum;
        min = min < sum ? min : sum;
    }

    for (let i = 0; i < 4; i++) {
        if (!operator[i]) continue;
        operator[i] = operator[i] - 1;
        dfs(idx + 1, calculate(i, sum, number[idx + 1]), N, number, operator);
        operator[i] = operator[i] + 1;
    }
};

const calculate = (idx, acc, curr) => {
    if (idx === 0) return acc + curr;
    else if (idx === 1) return acc - curr;
    else if (idx === 2) return acc * curr;
    else return ~~(acc / curr); // ~~는 Math.floor()와 동일
};

function solution() {
    const N = input()[0];
    const number = input();
    const operator = input();

    dfs(0, number[0], N, number, operator);
    console.log(max);
    console.log(min);
}

solution();
