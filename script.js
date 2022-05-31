function computerPlay() {
  let compValue = Math.floor(Math.random() * 3)
  if (compValue === 0) {
    return "rock"
  } else if (compValue === 1) {
    return "paper"
  } else if (compValue === 2) {
    return "scissors"
  } else {
    return "Error"
  }
}

function playerPlay() {
  let userValue = prompt("Pick rock, paper, or scissors: ")
  return userValue.toLowerCase()
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat paper."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose. Paper beats rock."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock."
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose. Rock beats scissors"
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors"
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose. Scissors beat paper"
  } else {
    return "Error: Choose a correct option"
  }
}
const playerSelection = playerPlay()
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

// function game() {
// playRound()
// for (let i = 0; i < 5; i++) {
// your code here!
// }}
