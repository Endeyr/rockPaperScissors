// sets score var
let playerScore = 0
let computerScore = 0
// randomly picks number assigns name
function computerPlay() {
  const rps = ["fire", "water", "grass"]
  let randNum = Math.floor(Math.random() * 3)
  return rps[randNum]
}
// user picks their choice
/// function userPlay() {
// .addEventListener to buttons for click choices
// let userValue = prompt("Pick fire, water, or grass: ")
// return userValue.toLowerCase()
// }
// test function
// console.log(computerPlay())
// user wins
function win(userSelection, computerSelection) {
  playerScore++
  console.log(
    "You win! " + userSelection + " beats " + computerSelection + ". You win!"
  )
  console.log(playerScore + " : " + computerScore)
}
// user loses
function lose(userSelection, computerSelection) {
  computerScore++
  console.log(
    "You lose. " + computerSelection + " beats " + userSelection + "."
  )
  console.log(playerScore + " : " + computerScore)
}
// user ties
function tie(userSelection, computerSelection) {
  console.log("tie")
}
// main game function
function game() {
  for (let i = 0; i < 10; i++) {
    let computerSelection = computerPlay()
    let userSelection = prompt("Pick fire, water, or grass: ")
    // console.log("You picked " + userSelection)
    // console.log("They picked " + computerSelection)
    if (userSelection === computerSelection) {
      tie(userSelection, computerSelection)
      // console.log("tie")
    } else if (
      userSelection + computerSelection === "fire" + "grass" ||
      "grass" + "water" ||
      "water" + "fire"
    ) {
      win(userSelection, computerSelection)
      // console.log("You win! " + userSelection + " beats " + computerSelection + ".")
    } else if (
      computerSelection + userSelection === "fire" + "grass" ||
      "grass" + "water" ||
      "water" + "fire"
    ) {
      lose(userSelection, computerSelection)
      // console.log("You lose. " + computerSelection + " beats " + userSelection + ".")
    }
  }
}
