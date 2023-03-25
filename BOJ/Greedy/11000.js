const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getLeftChildIndex = index => index * 2 + 1;
  getRightChildIndex = index => index * 2 + 2;

  length = () => {
    return this.queue.length;
  };

  enqueue = node => {
    this.queue.push(node);
    let index = this.queue.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.queue[parentIndex] < node) break;
      this.queue[index] = this.queue[parentIndex];
      index = parentIndex;
    }

    this.queue[index] = node;
  };

  dequeue = () => {
    const rootNode = this.queue[0];

    if (this.queue.length === 0) return undefined;
    else if (this.queue.length === 1) this.queue = [];
    else {
      this.queue[0] = this.queue.pop();
      this.downHeap();
    }
    return rootNode;
  };

  downHeap = () => {
    const rootNode = this.queue[0];
    const length = this.queue.length;
    let index = 0;

    while (this.getLeftChildIndex(index) < length) {
      const leftChildIdx = this.getLeftChildIndex(index);
      const rightChildIdx = this.getRightChildIndex(index);
      const maxIdx =
        rightChildIdx < length &&
        this.queue[rightChildIdx] < this.queue[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (rootNode < this.queue[maxIdx]) break;
      this.queue[index] = this.queue[maxIdx];
      index = maxIdx;
    }
    this.queue[index] = rootNode;
  };
}

const solution = () => {
  let N = Number(stdin.shift());
  const arr = stdin
    .map(item => item.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);
  const priorityQueue = new PriorityQueue();
  for (let i = 0; i < N; i++) {
    const [start, end] = arr[i];
    let time = priorityQueue.dequeue();
    if (time === 'undefined') {
      priorityQueue.enqueue(end);
    } else if (start < time) priorityQueue.enqueue(time);
    priorityQueue.enqueue(end);
  }
  return priorityQueue.length();
};

console.log(solution());
