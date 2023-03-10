const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let stdin = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
    const [N, M] = stdin.shift().split(' ').map(Number);
    // const arr = Array.from(Array(N), () => Array());

    const arr = stdin.map((s) => s.split(''));

    let dx = [1, -1, 0, 0];
    let dy = [0, 0, 1, -1];

	let count = 0;

    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
			for (let idx = 0; idx < 4; idx++) {
				let fy = y + dy[idx];
				let fx = x + dx[idx];

				if (y < 0 || y >= N || x < 0 || x >= M) continue;

				if (arr[y][x] === arr[fy][fx]) {
					count++;
					
				}

			}
		}
    }
};

solution();
