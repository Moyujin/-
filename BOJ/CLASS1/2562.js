const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const max = Math.max(...input);
const index = input.indexOf(max + "\r");

console.log(max);
console.log(index + 1);
