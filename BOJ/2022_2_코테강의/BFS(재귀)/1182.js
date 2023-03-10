const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(' ').map(Number);
})();
let count = 0;

const dfs = (N, S, idx, sum, arr) => {
    if (idx === N) {
        if (sum === S) count = count + 1;
        return;
    }

    dfs(N, S, idx + 1, sum, arr);
    dfs(N, S, idx + 1, sum + arr[idx], arr);
};

function solution() {
    const [N, S] = input();
    const arr = input();

    dfs(N, S, 0, 0, arr);

    if (S === 0) count--;
    console.log(count);
}

solution();
