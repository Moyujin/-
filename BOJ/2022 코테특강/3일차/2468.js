const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let stdin = fs.readFileSync(filePath).toString().trim().split("\n");

const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map(Number);
})();


const solution = () => {
    const N = input()[0];
    const arr = Array.from(Array(N), () => new Array(N));

    for (let i = 0; i < N; i++) {
        const data = input();
        data.forEach((element, idx) => {
            arr[i][idx] = element;
        });
    }

    console.log(arr);
};

solution();
