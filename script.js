let playerScore = 0;
let computerScore = 0;
let roundWinner = document.getElementById("round-winner");

function computerPlay() {
  decision = ["rock", "paper", "scissors"];
  return decision[Math.floor(Math.random() * decision.length)];
}

function winner() {
  if (playerScore === 5) {
    roundWinner.innerHTML = "Player Wins!";
  }
  if (computerScore === 5) {
    roundWinner.innerHTML = "Computer wins!";
  }
}

function updateScore() {
  const playerScorePara = document.getElementById("player-score");
  const computerScorePara = document.getElementById("computer-score");

  playerScorePara.textContent = `Player: ${playerScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  while (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
    roundWinner.innerHTML = "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    roundWinner.innerHTML = "You win!";
    playerScore++;
  } else if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    roundWinner.innerHTML = "You lose!";
    computerScore++;
  } break;
}
winner();
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (playerSelection) => {
    playerSelection = button.id;
    playRound(playerSelection);
    updateScore();
  });
});

const restart = document.getElementById("restart");
  restart.onclick = function() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    roundWinner.innerHTML = "Score";
}
