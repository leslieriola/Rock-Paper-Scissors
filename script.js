const choices = ["rock", "paper", "scissors"];

function game() {
  playRound();
}
function playRound() {}
const playerSelection = playerChoice();
const computerSelection = computerChoice();
const winner = checkWinner(playerSelection, computerSelection);

function playerChoice() {
  let input = prompt("Type Rock, Paper, Sciccors");
  while (input == null) {
    input = prompt("Type Rock, Paper, Scissors");
  }

  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper, Scissors");
    input = input.toLowerCase();
    check = validateInput(input);
    sci;
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}
function validateInput(choice) {
  if (choices.includes(choice));
}
function checkWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Its a Tie";
  } else if (
    (playerChoice === "rock" && computerChoice == "scissors") ||
    (playerChoice === "paper" && computerChoice == "rock") ||
    (playerChoice === "scissors" && computerChoice == "paper")
  ) {
    return "You Win";
  } else {
    return "Try Again";
  }
}
