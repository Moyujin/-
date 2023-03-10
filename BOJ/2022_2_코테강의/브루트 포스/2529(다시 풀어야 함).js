const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
const visited = Array(10).fill(false);

const dfs = (num, idx, result, operator) => {
    if (idx === operator.length + 1) {
        result.push(num);
    }

    for (let i = 0; i <= 9; i++) {
        if (visited[i]) continue;
        if (idx === 0 || check(num[idx - 1], i, operator[idx - 1])) {
            visited[i] = true;
            dfs(num + i, idx + 1, result, operator);
            visited[i] = false;
        }
    }
};

const check = (num1, num2, operator) => {
    if (operator === '<' && num2 < num1) return false;
    else if (operator === '>' && num1 < num2) return false;
    return true;
};

function solution() {
    const N = Number(stdin[0]);
    const operator = stdin[1].split(' ');
    const arr = [];

    dfs('', 0, arr, operator);
    arr.sort();
    console.log(arr.slice(-1)[0]);
    console.log(arr[0]);
}

solution();
