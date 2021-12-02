//READ INPUT
const fs = require('fs');

const lines = fs
    .readFileSync('input.txt', { encoding: 'utf-8'})
    .split('\n')
    .filter((x) => Boolean(x))
    .map((x) => parseInt(x));

//FIRST PROBLEM
const problemPart1 = (data) => {
    let count = 0;
    for (let i = 1; i < data.length - 1; i++) {
        if (data[i] > data[i-1]) {
            count++;
        }
    }
    return count;
}

//SECOND PROBLEM
const problemPart2 = (data) => {
    let count = 0;
    for (let i = 2; i < data.length - 1; i++) {
        if ((data[i-2]+data[i-1]+data[i])<(data[i-1]+data[i]+data[i+1])) {
            count++;
        }
    }
    return count;
}

console.log(problemPart1(lines));
console.log(problemPart2(lines));
