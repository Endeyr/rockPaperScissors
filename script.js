let userScore = 0
let computerScore = 0
function playGame() {
  while (userScore < 5 && computerScore < 5) {
    let userChoice = prompt("Choose fire, water, or grass: ").toLowerCase()
    let computerChoice = computerPlay()
    if (userChoice + computerChoice === "fire" + "grass") {
      console.log(userChoice, " beats ", computerChoice)
      win()
    } else if (userChoice + computerChoice === "grass" + "water") {
      console.log(userChoice, " beats ", computerChoice)
      win()
    } else if (userChoice + computerChoice === "water" + "fire") {
      console.log(userChoice, " beats ", computerChoice)
      win()
    } else if (userChoice + computerChoice === "water" + "grass") {
      console.log(computerChoice, " beats ", userChoice)
      lose()
    } else if (userChoice + computerChoice === "grass" + "fire") {
      console.log(computerChoice, " beats ", userChoice)
      lose()
    } else if (userChoice + computerChoice === "fire" + "water") {
      console.log(computerChoice, " beats ", userChoice)
      lose()
    } else {
      console.log(computerChoice, " ties ", userChoice)
      tie()
    }
  }
  if (userScore > computerScore) {
    return "You Win! " + userScore + " : " + computerScore
  } else if (userScore < computerScore) {
    return "You lose " + userScore + " : " + computerScore
  }
}
// computer random choice
function computerPlay() {
  const fwg = ["fire", "water", "grass"]
  let randNum = Math.floor(Math.random() * 3)
  return fwg[randNum]
}
function win() {
  userScore++
  console.log("You win " + userScore + " : " + computerScore)
}
function lose() {
  computerScore++
  console.log("You lose " + userScore + " : " + computerScore)
}
function tie() {
  console.log("You tie " + userScore + " : " + computerScore)
}
