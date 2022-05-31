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
