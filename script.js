let userScore = 0
let computerScore = 0
let playing = false
const compSelect = document.getElementById("computerSelection")
const results = document.getElementById("results")
const score = document.getElementById("score")
const btns = document.getElementById("buttons")
const end = document.getElementById("end")
const again = document.getElementById("again")

function setFire() {
  let f = "fire"
  playRound(f)
}
function setWater() {
  let w = "water"
  playRound(w)
}
function setGrass() {
  let g = "grass"
  playRound(g)
}
function playGame() {
  while (userScore < 5 && computerScore < 5) {
    playRound()
  }
}
function playRound(userChoice) {
  let computerChoice = computerPlay()

  if (userChoice + computerChoice === "fire" + "grass") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    win()
  } else if (userChoice + computerChoice === "grass" + "water") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    win()
  } else if (userChoice + computerChoice === "water" + "fire") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    win()
  } else if (userChoice + computerChoice === "water" + "grass") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    lose()
  } else if (userChoice + computerChoice === "grass" + "fire") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    lose()
  } else if (userChoice + computerChoice === "fire" + "water") {
    compSelect.textContent = "Computer Selected: " + computerChoice
    lose()
  } else if (userChoice === computerChoice) {
    compSelect.textContent = "Computer Selected: " + computerChoice
    tie()
  } else console.log("ERROR")
  if (userScore >= 5) {
    end.textContent = "You Win! " + userScore + " : " + computerScore
    let pa = document.createElement("button")
    pa.textContent = "Play Again"
    pa.id = "pa"
    pa.onClick = "replayGame()"
    again.appendChild(pa)
  } else if (computerScore >= 5) {
    end.textContent = "You lose " + userScore + " : " + computerScore
    let pa = document.createElement("button")
    pa.textContent = "Play Again"
    pa.id = "pa"
    again.appendChild(pa)
    pa.addEventListener("click", replayGame)
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
  results.textContent = "You win!"
  score.textContent =
    "User Score: " + userScore + " - " + " Computer Score: " + computerScore
  console.log("you win")
}
function lose() {
  computerScore++
  results.textContent = "You lose"
  score.textContent =
    "User Score: " + userScore + " - " + " Computer Score: " + computerScore
  console.log("you lose")
}
function tie() {
  results.textContent = "You tie!"
  score.textContent =
    "User Score: " + userScore + " - " + " Computer Score: " + computerScore
  console.log("you tie")
}
function replayGame() {
  location.reload()
}
window.onload = function () {
  let startGame = document.getElementById("startGame")
}
