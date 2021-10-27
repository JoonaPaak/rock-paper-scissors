//Variable declaration
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

//Random selector for computers choice
function computerPlay() {
  decision = ["rock", "paper", "scissors"];
  return decision[Math.floor(Math.random() * decision.length)];
}

//Loops through playRound function until one of the scores equals to 5 and alerts winner function
function game() {
  while (playerScore < 5 && computerScore < 5) {
    let computerSelection = computerPlay();
    let playerSelection = window.prompt("Write out rock, paper or scissors to play!").toLowerCase();
    alert(playRound(playerSelection, computerSelection));
  }
  alert(winner());
}

//One round of the game. Checks who wins and changes scores accordingly
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "It's a tie!";
    return (roundWinner + " Your score: " + playerScore + " Computer score: " + computerScore);
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner = "You win!";
    playerScore++;
    return (roundWinner + " Your score: " + playerScore + " Computer score: " + computerScore);
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    roundWinner = "You lose!";
    computerScore++;
    return (roundWinner + " Your score: " + playerScore + " Computer score: " + computerScore);
  } else {
    return "You misspelled your answer!";
  }
}

//Checks who wins the game after 5 rounds
function winner() {
  if (playerScore === 5) {
    return "Player Wins!";
  }
  if (computerScore === 5) {
    return "Computer wins!";
  }
}

console.log(game());
