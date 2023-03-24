const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const stdin = fs.readFileSync(filePath).toString().trim().split('\n');

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  getLeftChildIndex = index => index * 2 + 1;
  getRightChildIndex = index => index * 2 + 2;

  enqueue = element => {
    this.queue.push(element);
    let index = this.queue.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.queue[parentIndex] < element) break;
      this.queue[index] = this.queue[parentIndex];
      index = parentIndex;
    }
    this.queue[index] = element;
  };

  dequeue = () => {
    const rootNode = this.queue[0];
    if (this.queue.length === 0) return 0;
    if (this.queue.length === 1) this.queue = [];
    else {
      this.queue[0] = this.queue.pop();
      this.downHeap();
    }
    return rootNode;
  };

  downHeap = () => {
    let index = 0;
    let length = this.queue.length;
    const rootNode = this.queue[index];

    while (this.getLeftChildIndex(index) < length) {
      let leftIdx = this.getLeftChildIndex(index);
      let rightIdx = this.getRightChildIndex(index);
      let minIdx =
        rightIdx < length && this.queue[rightIdx] < this.queue[leftIdx]
          ? rightIdx
          : leftIdx;

      if (rootNode < this.queue[minIdx]) break;
      this.queue[index] = this.queue[minIdx];
      index = minIdx;
    }
    this.queue[index] = rootNode;
  };
}

const solution = () => {
  const N = Number(stdin.shift());
  const priorityQueue = new PriorityQueue();
  const res = [];

  stdin.map(item => {
    item = +item;
    if (item === 0) res.push(priorityQueue.dequeue());
    else priorityQueue.enqueue(item);
  });
  return res.join('\n');
};

console.log(solution());
