let userScore = 0
let computerScore = 0
function playGame() {
  while (userScore < 5 && computerScore < 5) {
    let userChoice = prompt("Choose fire, water, or grass: ").toLowerCase()
    let computerChoice = computerPlay()
    if (userChoice + computerChoice === "fire" + "grass") {
      win()
    } else if (userChoice + computerChoice === "grass" + "water") {
      win()
    } else if (userChoice + computerChoice === "water" + "fire") {
      win()
    } else if (userChoice + computerChoice === "water" + "grass") {
      lose()
    } else if (userChoice + computerChoice === "grass" + "fire") {
      lose()
    } else if (userChoice + computerChoice === "fire" + "water") {
      lose()
    } else {
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
  return "You win " + userScore + " : " + computerScore
}
function lose() {
  computerScore++
  return "You lose " + userScore + " : " + computerScore
}
function tie() {
  return "You tie " + userScore + " : " + computerScore
}
