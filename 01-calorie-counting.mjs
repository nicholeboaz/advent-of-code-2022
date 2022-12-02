import { INPUT } from './01-input.mjs'

// Part One

const caloriesArr = INPUT
    .split(/\n\n/g)
    .map(list => list.split(/\n/g))
    .map(list => list.map(num => parseInt(num, 10)))
    .map(list => list.reduce((a, b) => a + b))

const sortedCaloriesArr = [...caloriesArr].sort((a, b) => b - a)

const answer1 = sortedCaloriesArr[0]

console.log(answer1)
// Answer: 71300

// Part Two

const answer2 = sortedCaloriesArr
    .slice(0, 3)
    .reduce((a, b) => a + b)
    
console.log(answer2)
// Answer: 209691