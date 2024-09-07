function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];

  const value = Math.floor(Math.random() * options.length);
  return options[value];
}
console.log(getRandomComputerResult());
