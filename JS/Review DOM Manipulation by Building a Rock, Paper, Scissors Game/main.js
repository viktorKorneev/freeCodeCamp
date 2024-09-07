function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

  const value = Math.floor(Math.random() * options.length);
  return options[value];
}
console.log(getRandomComputerResult());

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
}

console.log(hasPlayerWonTheRound("Rock", "Scissors"));
console.log(hasPlayerWonTheRound("Scissors", "Rock"));
// -----------------------------------------------------------------------
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult}`;
  }
}

console.log(getRoundResults("Paper"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);
// ------------------------------------------------------------------------------------

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
  }
  
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

showResults("Rock");
