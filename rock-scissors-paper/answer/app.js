let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const gameResult = document.querySelector(".game-over > p");

const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
getComputerChoice();

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  gameResult.innerHTML =
    userChoice +
    "(유저)" +
    "&nbsp;VS&nbsp;" +
    computerChoice +
    "(피로봇)" +
    ". 당신이 이겼어요!!🔥";

  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 500);

  if (userScore === 5) {
    endGame();
  }
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  gameResult.innerHTML =
    userChoice +
    "(유저)" +
    "&nbsp;VS&nbsp;" +
    computerChoice +
    "(피로봇)" +
    ". 당신이 졌어요ㅠㅠ💦";

  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 500);

  if (computerScore === 5) {
    endGame();
  }
}

function draw(userChoice, computerChoice) {
  gameResult.innerHTML =
    userChoice +
    "(유저)" +
    "&nbsp;VS&nbsp;" +
    computerChoice +
    "(피로봇)" +
    ". 으잉? 비겼네요!👀";

  document.getElementById(userChoice).classList.add("blue-glow");
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove("blue-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });
}

main();
