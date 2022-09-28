function getRandomInt3() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice() {
    switch (getRandomInt3()) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            console.error("Error in getComputerChoice");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelectionLower = playerSelection.toLowerCase();
    let win = "";

    switch (playerSelectionLower) {
        case "rock":
            win =
                computerSelection == "Rock"
                    ? "Tie"
                    : computerSelection == "Paper"
                    ? "Lose"
                    : "Win";
            break;

        case "paper":
            win =
                computerSelection == "Paper"
                    ? "Tie"
                    : computerSelection == "Scissors"
                    ? "Lose"
                    : "Win";
            break;
        case "scissors":
            win =
                computerSelection == "Scissors"
                    ? "Tie"
                    : computerSelection == "Rock"
                    ? "Lose"
                    : "Win";
            break;
        default:
            win = "error";
            break;
    }

    processResult(win);
}

function processResult(winStatus) {
    let display = document.querySelector('.result');
    display.textContent = winStatus;
}

/*function game() {
  let playerSelection = prompt("Type Rock, Paper, or Scissors");
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let win = playRound(playerSelection, computerSelection);

    switch (win) {
      case "Win":
        playerScore++;
        console.log(
          `%cYou Win! ${playerSelection} beats ${computerSelection}`,
          "color: green"
        );
        break;
      case "Lose":
        computerScore++;
        console.log(
          `%cYou Lose! ${computerSelection} beats ${playerSelection}`,
          "color: red"
        );
        break;
      case "Tie":
        console.log(
          `%cIt's a tie. Player and Computer both chose ${playerSelection}`,
          "color: yellow"
        );
        break;
      default:
        console.error("Error in game()");
        break;
    }
  }

  // console.log("%cFinal Score", "font-weight: 900; font-size: 16px");
  console.log(
    `%cFinal Score\nPlayer: ${playerScore}\nComputer: ${computerScore}`,
    "font-weight: 900; font-size: 16px"
  );

  if (playerScore > computerScore) {
    console.log(
      "%cPlayer Wins!",
      "font-weight: 900; font-size: 24px; color: green"
    );
  } else if (playerScore < computerScore) {
    console.log(
      "%cPlayer Loses :(",
      "font-weight: 900; font-size: 24px; color: red"
    );
  } else {
    console.log(
      "%cIt's a Tie :)",
      "font-weight: 900; font-size: 24px; color: yellow"
    );
  }
}*/

// Logic to add event listeners to buttons

function initializeGameButtons() {
    const rockButton = document.querySelector(".button-rock");
    rockButton.addEventListener(
        "click",
        () => {
            playRound("Rock", getComputerChoice());
        }
    );

    const paperButton = document.querySelector(".button-paper");
    paperButton.addEventListener(
        "click",
        () => {
            playRound("Paper", getComputerChoice());
        }
    );

    const scissorsButton = document.querySelector(".button-scissors");
    scissorsButton.addEventListener(
        "click",
        () => {
            playRound("Scissors", getComputerChoice());
        }
    );
}

initializeGameButtons();
