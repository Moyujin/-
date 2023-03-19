const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const preOrder = (tree, root, res) => {
  if (root === '.') return;
  const [left, right] = tree[root];

  res[0] += root;
  preOrder(tree, left, res);
  preOrder(tree, right, res);
};

const inOrder = (tree, root, res) => {
  if (root === '.') return;
  const [left, right] = tree[root];

  inOrder(tree, left, res);
  res[1] += root;
  inOrder(tree, right, res);
};

const postOrder = (tree, root, res) => {
  if (root === '.') return;
  const [left, right] = tree[root];

  postOrder(tree, left, res);
  postOrder(tree, right, res);
  res[2] += root;
};

const solution = () => {
  const N = Number(stdin.shift());
  const tree = {};

  for (let i = 0; i < N; i++) {
    const [root, left, right] = stdin[i].split(' ');
    tree[root] = [left, right];
  }
  res = ['', '', ''];
  preOrder(tree, 'A', res);
  inOrder(tree, 'A', res);
  postOrder(tree, 'A', res);
  return res.join('\n');
};

console.log(solution());
