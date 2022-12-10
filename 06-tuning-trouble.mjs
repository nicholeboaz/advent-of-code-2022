import { INPUT } from "./06-input.mjs";

// Part One

let startOfPacket = false

let string = INPUT.slice(0, 4)

while (!startOfPacket) {
    for (let i = 4; i < INPUT.length; i++) {
        string = string.concat(INPUT[i])
        let lastFour = [...string.slice(-4)]
        let thisTest = false
        for (let i = 0; i < 4; i++) {
            let letter = lastFour.pop()
            if (lastFour.includes(letter)) {
                thisTest = true
            }
            lastFour.unshift(letter)
        }
        if (!thisTest) {
            startOfPacket = true
            break
        }
    }
}

console.log(string.length)
// 1175

// Part Two

let startOfMessage = false

let messageString = INPUT.slice(0, 14)

while (!startOfMessage) {
    for (let i = 14; i < INPUT.length; i++) {
        messageString = messageString.concat(INPUT[i])
        let lastFourteen = [...messageString.slice(-14)]
        let thisTest = false
        for (let i = 0; i < 14; i++) {
            let letter = lastFourteen.pop()
            if (lastFourteen.includes(letter)) {
                thisTest = true
            }
            lastFourteen.unshift(letter)
        }
        if (!thisTest) {
            startOfMessage = true
            break
        }
    }
}

console.log(messageString.length)
// 3217