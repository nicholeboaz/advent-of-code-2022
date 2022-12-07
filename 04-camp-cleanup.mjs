import { INPUT } from "./04-input.mjs"

// Part One

const elfPairs = INPUT
    .split(/\n/g)
    .map(pair => pair.split(","))
    .map(pair => {
        return pair.map(range => range.split("-"))
    })
    .map(pair => pair.map(range => range.map(num => parseInt(num, 10))))

const fullRanges = elfPairs.map(pair => {
    return pair.map(range => {
        for (let i = range[0] + 1; i < range[1]; i++) {
            range.push(i)
        }
        return range.sort((a, b) => a - b)
    })
})

let answer1 = 0;

fullRanges.forEach(pair => {
    const elf1 = pair[0]
    const elf2 = pair[1]
    function check(a, b) {
        return a.every(el => {
            return b.includes(el)
        })
    }
    if (check(elf1, elf2) || check(elf2, elf1)) {
        answer1++
    }
})

console.log(answer1)
// Answer: 562

// Part Two

let answer2 = 0;

fullRanges.forEach(pair => {
    const elf1 = pair[0]
    const elf2 = pair[1]
    function check(a, b) {
        return a.some(el => {
            return b.includes(el)
        })
    }
    if (check(elf1, elf2) || check(elf2, elf1)) {
        answer2++
    }
})

console.log(answer2)
// Answer: 924