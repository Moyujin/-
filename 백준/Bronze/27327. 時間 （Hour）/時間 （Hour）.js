const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let number = Number(fs.readFileSync(filePath).toString().trim());

console.log(number * 24)