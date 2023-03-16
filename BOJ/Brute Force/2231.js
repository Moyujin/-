const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const N = Number(stdin);
  // 각 자릿수를 더해서 N이 나오기 떄문에
  // 각 자릿수를 9로 가정한다면
  // 그 이전의 값은 확인할 필요가 없어짐
  const start = N - stdin.length * 9;
  let res = 0;

  for (let i = start; i <= N; i++) {
    const [...number] = i.toString();
    if (number.reduce((acc, curr) => acc + Number(curr), 0) + i === N) {
      res = i;
      break;
    }
  }

  console.log(res);
};

solution();
