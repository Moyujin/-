const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let number = Number(fs.readFileSync(filePath).toString().trim());

if (number >= 90) console.log('A');
else if (number >= 80) console.log('B');
else if (number >= 70) console.log('C');
else if (number >= 60) console.log('D');
else console.log('F');
