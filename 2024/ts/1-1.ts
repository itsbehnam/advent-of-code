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

// TODO: write sorting functions
const sortedListA: Array<number> = ListA.sort();
const sortedListB: Array<number> = ListB.sort();
let difference: number = 0;

for (let i: number = 0; i < sortedListA.length; i++) {
    difference += Math.abs(sortedListA[i] - sortedListB[i]);
}

console.log(difference);