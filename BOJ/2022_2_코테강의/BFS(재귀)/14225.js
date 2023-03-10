const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(' ').map(Number);
})();

const result = Array(200000);

const dfs = (N, idx, sum, arr) => {
    if (idx === N) {
        result[sum] = true;
        return;
    }
    dfs(N, idx + 1, sum, arr);
    dfs(N, idx + 1, sum + arr[idx], arr);
};

function solution() {
    const N = input()[0];
    const arr = input();
    let index = 0;

    dfs(N, 0, 0, arr);

    while (result[index++]) {}
    console.log(index - 1);
}

solution();
