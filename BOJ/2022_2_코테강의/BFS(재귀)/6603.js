const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(' ').map(Number);
})();
const LEN = 6;
const num = [];

const dfs = (N, idx, cnt, arr, result) => {
    if (cnt === LEN) {
        result.push(num.join(' '));
        return;
    }

    if (idx === N) {
        return;
    }

    num.push(arr[idx]);
    dfs(N, idx + 1, cnt + 1, arr, result);
    num.pop();
    dfs(N, idx + 1, cnt, arr, result);
};

function solution() {
    const result = [];
    for (let i = 0; i < stdin.length - 1; i++) {
        const [N, ...arr] = input();

        dfs(N, 0, 0, arr, result);
        result.push(' ');
    }
    result.pop();
    console.log(result.join('\n'));
}

solution();
