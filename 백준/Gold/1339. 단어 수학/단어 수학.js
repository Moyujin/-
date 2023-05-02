const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [N, ...arr] = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
    const result = {};

    arr.forEach((items) => {
        [...items].forEach((item, index) => {
            if (!result[item]) result[item] = 0;
            result[item] = result[item] + 10 ** (items.length - 1 - index);
        });
    });
    console.log(
        Object.values(result)
            .sort((a, b) => b - a)
            .reduce((acc, curr, index) => {
                return acc + curr * (9 - index);
            }, 0),
    );
}

solution();
