import * as fs from "node:fs"

// TODO: extract method
const input = fs.readFileSync('../inputs/1.txt', 'utf-8');
const lines = input.split('\n');

const ListA: Array<number> = []
const ListB: Array<number> = []

lines.forEach(line => {
    if (line.trim().length !== 0) {
        const temp: Array<string> = line.split('   ');
        ListA.push(Number(temp[0]));
        ListB.push(Number(temp[1]));
    }
})

const frequencyArray: number[] = [];
let sum: number = 0;

ListB.forEach( num => {
    if (!frequencyArray[num]) {
        frequencyArray[num] = 0;
    }
    frequencyArray[num]++;
})

ListA.forEach( num => {
    if (frequencyArray[num]) {
        sum += num * frequencyArray[num];
    }
})

console.log(sum);