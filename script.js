let roundCounter = 0

const computerPlay = () => {
  const possibleSelections = ["rock", "paper", "scissors"];
  let selection = possibleSelections[Math.floor(Math.random() * possibleSelections.length)];
  return selection
}

document.querySelector('.tie').classList.toggle('hidden')
document.querySelector('.win').classList.toggle('hidden')
document.querySelector('.loose').classList.toggle('hidden')

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "rock") {
    roundCounter++
    document.querySelector('.chooseYourWeapon').classList.toggle('hidden')
    document.querySelector('.tie').classList.toggle('hidden')
    console.log("Tie")
  } else if
    (playerSelection === "rock" && computerSelection === "paper") {
    document.querySelector('.chooseYourWeapon').classList.toggle('hidden')
    document.querySelector('.loose').classList.toggle('hidden')
    console.log("You loose")
  }
  else {
    document.querySelector('.chooseYourWeapon').classList.toggle('hidden')
    document.querySelector('.win').classList.toggle('hidden')
    console.log("You win")
  }

}

document.querySelector('#rockButton').addEventListener('click', () => {
  roundCounter++
  let playerSelection = "rock"
  let computerSelection = computerPlay()
  playRound(playerSelection, computerSelection)
})

