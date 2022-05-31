function playGame() {
  let userChoice = prompt("Choose fire, water, or grass: ").toLowerCase()
  let computerChoice = computerPlay()
  let userScore = 0
  let computerScore = 0
  for (let i = 5; i === userScore || i === computerScore; ) {
    if (
      userChoice + computerChoice === "fire" + "grass" ||
      "grass" + "water" ||
      "water" + "fire"
    ) {
      win()
    } else if (
      userChoice + computerChoice === "water" + "grass" ||
      "grass" + "fire" ||
      "fire" + "water"
    ) {
      lose()
    } else {
      tie()
    }
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
  console.log("You win")
}
function lose() {
  computerScore++
  console.log("You lose")
}
function tie() {
  console.log("You tie")
}
