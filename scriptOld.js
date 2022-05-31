// sets score var
let playerScore = 0
let computerScore = 0
// define inputs
let computerSelection = computerPlay()
let playerSelection = playerPlay()
let results = ""
// ask user for input
function playerPlay() {
  let userValue = prompt("Pick rock, paper, or scissors: ")
  return userValue.toLowerCase()
}
// randomly picks number between 0:2 and assigns name
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
// plays fulls game looping through till user or computer has 5 wins

// plays round of game and assigns winner based on inputs
function playRound(playerSelection, computerSelection, results) {
  if (playerSelection === computerSelection) {
    return "tie"
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "You win! Scissors beat paper."
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++
    return "You lose. Paper beats rock."
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return "You win! Paper beats rock."
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++
    return "You lose. Rock beats paper."
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "You win! Rock beats paper."
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++
    return "You lose. Scissors beat paper."
  } else {
    return "Error: Choose a correct option"
  }
}
console.log(playRound(playerSelection, computerSelection))
console.log(playerScore, computerScore)
