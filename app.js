// player scores
let userScore = 0;
let compScore = 0;
let round = 0;

// player choice buttons to add to event listener
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

// scores & results to update
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const resultDisplay = document.querySelector(".resultDisplay");

// function for computers choice
function computerPlay() {
  const number = Math.floor(Math.random() * 1000);
  if (number % 3 === 0) {
    return "rock";
  }
  if (number % 3 === 1) {
    return "paper";
  }
  return "scissors";
}

// 5 round game of rock paper scissors
function playRound(playerSelection, computerSelection) {
  playerSelection = this.dataset.button; // lets player input choice through button
  computerSelection = computerPlay();
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userScore++;
    resultDisplay.textContent = `You won the round!! Round: ${round} ${playerSelection} beats ${computerSelection}. Score: You: ${userScore} Opponent: ${compScore}`;
    playerScore.textContent = `You:${userScore}`;
    if (userScore >= 5) {
      resultDisplay.textContent = `You win the game! Score: You: ${userScore} Opponent: ${compScore}`
    }
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    compScore++;
    resultDisplay.textContent = `You lost the round. Round: ${round} ${computerSelection} beats ${playerSelection}. Score: You: ${userScore} Opponent: ${compScore}`;
    computerScore.textContent = `Opponent:${compScore}`;
    if (compScore >= 5) {
      resultDisplay.textContent = `You lost the game. Score: You: ${userScore} Opponent: ${compScore}`
    }
  } else {
    resultDisplay.textContent = `It's a draw! Round: ${round} Score: You: ${userScore} Opponent: ${compScore}`
  }
  round++;
}

// Users button event listeners
console.log(rockButton.addEventListener("click", playRound));
console.log(paperButton.addEventListener("click", playRound));
console.log(scissorsButton.addEventListener("click", playRound));
