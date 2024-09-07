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

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption)
    playerScoreSpanElement.innerText = playerScore
    computerScoreSpanElement.innerText = computerScore
    
  
};

showResults("Rock");