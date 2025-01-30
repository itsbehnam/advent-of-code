import * as fs from "node:fs"

const input: string = fs.readFileSync('../inputs/2.txt', 'utf-8');
const lines: string[] = input.split('\n');
const reports: number[][] = lines
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => line.split(' ').map(Number))

const safeRecords: boolean[] = reports.map(report => isMonotonic(report) && diffWithinRange(report));
console.log(safeRecords.filter(Boolean).length);

function isMonotonic(record: number[]): boolean {
    const increasing: boolean = record[0] < record[1];
    for (let i = 0; i < record.length - 1; i++) {
        if ( record[i] === record[i + 1] ) return false;
        if ( increasing && (record[i + 1] < record[i])) return false;
        if ( !increasing && (record[i + 1] > record[i])) return false;
    }
    return true;
}

function diffWithinRange(record: number[]): boolean {
    for (let i = 0; i < record.length - 1; i++) {
        const diff: number = Math.abs(record[i + 1] - record[i]);
        if (diff < 1 || diff > 3) {
            return false
        }
    }
    return true;
}

import { expect } from "jsr:@std/expect";

Deno.test("isMonotonic test", () => {
    const arr1: number[] = [1, 2, 3]
    expect(isMonotonic(arr1)).toBe(true);

    const arr2: number[] = [3, 2, 1]
    expect(isMonotonic(arr2)).toBe(true);

    const arr3: number[] = [1, 2, 1]
    expect(isMonotonic(arr3)).toBe(false);

    const arr4: number[] = [1, 2, 2]
    expect(isMonotonic(arr4)).toBe(false);
});

Deno.test("diffWithinRange test", () => {
    const arr1: number[] = [1, 2, 3]
    expect(diffWithinRange(arr1)).toBe(true);

    const arr2: number[] = [3, 2, 1]
    expect(diffWithinRange(arr2)).toBe(true);

    const arr3: number[] = [1, 1]
    expect(diffWithinRange(arr3)).toBe(false);

    const arr4: number[] = [1, 6]
    expect(diffWithinRange(arr4)).toBe(false);

    const arr5: number[] = [1, 4]
    expect(diffWithinRange(arr5)).toBe(true);
});

