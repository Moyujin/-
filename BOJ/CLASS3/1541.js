const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const regex = /[+-]/;
  const arr = stdin.split(regex).map(Number);
  const stack = [...stdin].filter(item => {
    return item === '+' || item === '-';
  });

  let num = 0;
  let i = 0;
  let init = arr[i];

  if (stack.indexOf('-') === -1)
    return arr.reduce((acc, curr) => acc + curr, 0);

  while (stack.length) {
    if (stack[i] === '-') break;
    init += arr[i + 1];
    i++;
  }

  for (i; i < stack.length; i++) {
    if (stack[i] === '-') {
      init = init - num;
      num = arr[i + 1];
      continue;
    }
    num += arr[i + 1];
  }
  return init - num;
};

console.log(solution());
