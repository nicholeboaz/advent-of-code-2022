import { INPUT } from "./03-input.mjs"

// Part One

const rucksacks = INPUT.split(/\n/g)

const splitRucksacks = rucksacks.map(string => {
        return [string.substring(0, (string.length/2)), string.substring((string.length/2))]
    })

const valueRef = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

const duplicates = splitRucksacks.map(rucksack => {
    for (let letter of rucksack[0]) {
        if (rucksack[1].includes(letter)) {
            return letter
        }
    }
})

let answer1 = 0;

duplicates.forEach(letter => {
    answer1 += valueRef.indexOf(letter)
})

console.log(answer1)
// Answer: 8394

// Part Two
let answer2 = 0

for (let i = 0; i < rucksacks.length; i += 3) {
    
    let sack1 = rucksacks[i]
    let sack2 = rucksacks[i + 1]
    let sack3 = rucksacks[i + 2]

    for (let letter of sack1) {
        if (sack2.includes(letter) && sack3.includes(letter)) {
            answer2 += valueRef.indexOf(letter)
            break;
        }
    }
}

console.log(answer2)
// Answer: 2413