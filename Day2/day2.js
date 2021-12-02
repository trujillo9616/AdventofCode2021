//READ INPUT
const fs = require('fs');

const lines = fs
    .readFileSync('input.txt')
    .toString()
    .split('\n')
    .join(' ')
    .split(' ');

const dummy = ['forward', '5', 'down', '5', 'forward', '8', 'up', '3', 'down', '8', 'forward', '2'];

//FIRST PROBLEM
const problemPart1 = (data) => {
    let horizontal = 0;
    let depth = 0;
    for (i = 0; i < data.length-1; i += 2) {
        if (data[i] == 'down') {
            depth += parseInt(data[i+1]);
        } else if (data[i] == 'up') {
            depth -= parseInt(data[i+1]);
        } else {
            horizontal += parseInt(data[i+1])
        }
    }
    return (horizontal*depth);
}

//SECOND PROBLEM
const problemPart2 = (data) => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for (i = 0; i < data.length-1; i += 2) {
        if (data[i] == 'down') {
            aim += parseInt(data[i+1]);
        } else if (data[i] == 'up') {
            aim -= parseInt(data[i+1]);
        } else {
            horizontal += parseInt(data[i+1]);
            depth += (aim*parseInt(data[i+1]));
        }
    }
    return (horizontal*depth);
}

console.log(problemPart1(lines));
console.log(problemPart2(lines));
