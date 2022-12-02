import { INPUT } from "./02-input.mjs"

// Part One

const guide = INPUT
    .split(/\n/g)
    .map(str => str.split(/\s/g))

let answer1 = 0

function determineWinner(player1, player2) {
    let score = 0;

    switch (player2) {
        case "rock":
            score += 1;
            break;
        case "paper":
            score += 2;
            break;
        case "scissors":
            score += 3;
            break;
    }

    if (
      (player1 === "rock" && player2 === "paper") ||
      (player1 === "paper" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "rock")
    ) {
        score += 6;
    } else if (player1 === player2) {
        score += 3;
    }

    return score;
}

guide.forEach(game => {
    let player1 =
        game[0] === "A" ? "rock" : game[0] === "B" ? "paper" : "scissors";
    let player2 =
        game[1] === "X" ? "rock" : game[1] === "Y" ? "paper" : "scissors";

    answer1 += determineWinner(player1, player2)
})

console.log(answer1)
// Answer: 13675

// Part Two

let answer2 = 0;

guide.forEach(game => {
    let player1 =
        game[0] === "A" ? "rock" : game[0] === "B" ? "paper" : "scissors";
    let winOrLose = 
        game[1] === "X" ? "lose" : game[1] == "Y" ? "draw" : "win"

    let player2 = "";

    switch (winOrLose) {
        case "win":
            switch (player1) {
                case "rock":
                    player2 = "paper";
                    break;
                case "paper":
                    player2 = "scissors";
                    break;
                case "scissors":
                    player2 = "rock";
                    break;
            }
            break;
        case "lose":
            switch (player1) {
                case "rock":
                    player2 = "scissors";
                    break;
                case "paper":
                    player2 = "rock";
                    break;
                case "scissors":
                    player2 = "paper";
                    break;
            }
            break;
        case "draw":
            player2 = player1;
            break;
    }

    answer2 += determineWinner(player1, player2)
})

console.log(answer2)
// 14184