// Make a function that will return either 'Rock', 'Paper' or 'Scissors'.

function computerPlay() {
    const randomPick = (Math.random() * 3);
    if (randomPick <= 1) {
      return 'Rock';
    } else if (randomPick >= 2) {
      return 'Scissors';
    } else {
      return 'Paper';
    }
}

// A function that plays a round of Rock Paper Scissors. 
// If user picks rock and computer picks scissors return "You win, Rock beats Scissors!"
// else if computer picks paper return "You lose, Paper beats Rock"
// else return "It is a draw!"

// If user picks Paper and computer picks rock return "You win, Paper beats Rock!"
// else if computer picks scissors return "You lose, Scissors beats Paper"
// else return "It is a draw!"

// If user picks Scissors and computer picks Paper return "You win, Scissors beats Paper"
// else if computer picks Rock return "You lose, Rock beats Scissors"
// else return "It is a draw!"

let userScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        userScore++;
        return `You win! Rock beats Scissors. You: ${userScore} Opponent: ${compScore}`;
    } else if (playerSelection == 'rock' && computerSelection == 'Paper') {
        compScore++;
        return `You lose, Paper beats Rock. You: ${userScore} Opponent: ${compScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        userScore++;
        return `You win! Paper beats Rock. You: ${userScore} Opponent: ${compScore}`;
    } else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        compScore++;
        return `You lose, Scissors beats Rock. You: ${userScore} Opponent: ${compScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        userScore++;
        return `You win! Scissors beat Paper. You: ${userScore} Opponent: ${compScore}`;
    } else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        compScore++;
        return 'You lose! Rock beats Scissors.';
    } else return 'It\'s a draw!'
}

// console.log(playRound('Rock', 'Paper'))

// Make a 5 round game
// Prompt user to input either Rock, Paper or Scissors
// Make user input case insensitive
// Use computerPlay function and computers input
// if userScore is > compScore return You win the game!
// else if userScore is < compScore return You lose the game!
// else return It's a draw

function game(){
    for (let i = 0; i > 5; i++) {
        let playerSelection = window.prompt('Rock, Paper or Scissors?')
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))
        if (userScore > compScore) {
            console.log(`You have won the game! Final Score: ${userScore} to ${compScore}`)
        } else if (userScore < compScore) {
            console.log(`You lost the game. Final Score: ${userScore} to ${compScore}`)
        } else
        console.log(`The game is a draw! Final Score: ${userScore} to ${compScore}`)
    }
}
game();
