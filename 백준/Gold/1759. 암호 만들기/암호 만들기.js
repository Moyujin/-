const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');
const [L, C] = stdin[0].split(' ').map(Number);
const res = [];

const DFS = (str, idx, vowels, consonants, arr, check) => {
  if (str.length === L) {
    if (consonants >= 2 && vowels >= 1) res.push(str);
    return;
  }

  for (let i = idx + 1; i < C; i++) {
    DFS(
      str + arr[i],
      i,
      vowels + check[arr[i].charCodeAt(0) - 97],
      consonants + !check[arr[i].charCodeAt(0) - 97],
      arr,
      check,
    );
  }
};

const solution = () => {
  const arr = stdin[1].split(' ').sort();
  const check = Array(26).fill(0);
  check[0] = check[4] = check[8] = check[14] = check[20] = 1;

  DFS('', -1, 0, 0, arr, check);
  return res.join('\n');
};

console.log(solution());