let roundCounter = 0

const computerPlay = () => {
  const possibleSelections = ["rock", "paper", "scissors"];
  let selection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
  return selection
}


const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie")
  } else if
    (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You loose")
  }
  else {
    console.log("You win")
  }

}

document.querySelector('#rockButton').addEventListener('click', () => {
  roundCounter++
  let playerSelection = "rock"
  let computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)
})

