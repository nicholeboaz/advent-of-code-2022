import { INPUT, DIRECTIONS } from "./05-input.mjs"

// Part One

// make input usable

const listOfBoxes = INPUT
    .replace(/(?<!])    /g, '[ ] ')
    .replace(/(?<=])\s|\[|\]/g, '')
    .split("")

const stacksArr = []

for (let i = 0; i < 9; i++) {
    let arr = []
    for (let j = i; j < listOfBoxes.length; j += 9) {
        arr.unshift(listOfBoxes[j])
    }
    stacksArr.push(arr.filter(item => item !== " "))
}

// make directions usable

const dirArr = DIRECTIONS
    .split(/\n/g)
    .map(str => str.split(" "))
    .map(arr => arr.filter(str => (str !== "move" && str !== "from" && str !== "to")))

// don't fuck with the original array

let newStacksArr = stacksArr.map(arr => [...arr])

// do the moves

for (let arr of dirArr) {
    let quantity = arr[0]
    let from = arr[1] - 1
    let to = arr[2] - 1
    for (let i = 0; i < quantity; i++) {
        newStacksArr[to].push(newStacksArr[from].pop())
    }
}

let answer1 = ""

for (let stack of newStacksArr) {
    answer1 += stack[stack.length - 1]
}

console.log(answer1)
// CNSZFDVLJ

// Part Two

// don't fuck with the original array, again

let newStacksArr2 = stacksArr.map(arr => [...arr])

for (let arr of dirArr) {
    let quantity = (arr[0] * -1)
    let from = arr[1] - 1
    let to = arr[2] - 1

    newStacksArr2[to].push(...newStacksArr2[from].splice(quantity))
}

let answer2 = ""

for (let stack of newStacksArr2) {
    answer2 += stack[stack.length - 1]
}

console.log(answer2)
// QNDWLMGNS