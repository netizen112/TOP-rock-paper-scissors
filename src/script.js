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

    processResult(win, playerSelection, computerSelection);
}

function processResult(winStatus, playerSelection, computerSelection) {
    let display = document.querySelector(".result");
    const billboard = document.querySelector(".billboard");

    switch (winStatus) {
        case "Win":
            playerScore++;
            display.textContent = `Player Wins! ${playerSelection} beats ${computerSelection}`;
            display.setAttribute(
                "style",
                "border: 2px solid #10d827; box-shadow: 0 0 10px #10d827"
            );
            break;

        case "Lose":
            computerScore++;
            display.textContent = `Player Loses :(. ${computerSelection} beats ${playerSelection}`;
            display.setAttribute(
                "style",
                "border: 2px solid #ef3c21; box-shadow: 0 0 10px #ef3c21"
            );
            break;

        case "Tie":
            display.textContent = `It's a Tie. Player and Computer both chose ${computerSelection}`;
            display.setAttribute(
                "style",
                "border: 2px solid #9ecaed; box-shadow: 0 0 10px #9ecaed"
            );
            break;
        default:
            break;
    }

    updateDisplay();

    if (playerScore == 5) {
        deInitializeGameButtons();
        billboard.textContent = `Game Over after ${roundNumber} rounds!`;

        if (playerScore > computerScore) {
            display.setAttribute(
                "style",
                "border: 2px solid #10d827; box-shadow: 0 0 10px #10d827"
            );
            display.textContent = "Player WINS the game!";
        } else if (playerScore < computerScore) {
            display.textContent = `Player Loses the game :(.`;
            display.setAttribute(
                "style",
                "border: 2px solid #ef3c21; box-shadow: 0 0 10px #ef3c21"
            );
        } else if (playerScore == computerScore) {
            display.textContent = `It's a Tie`;
            display.setAttribute(
                "style",
                "border: 2px solid #9ecaed; box-shadow: 0 0 10px #9ecaed"
            );
        } else {
            console.error("Error processing result");
        }
    } else {
        roundNumber++;
    }
}

function deInitializeGameButtons() {
    const rockButton = document.querySelector(".button-rock");
    rockButton.removeEventListener('click', handleRock);

    const paperButton = document.querySelector(".button-paper");
    paperButton.removeEventListener('click', handlePaper);

    const scissorsButton = document.querySelector(".button-scissors");
    scissorsButton.removeEventListener('click', handleScissors);
}

function handleRock(){
    playRound("Rock", getComputerChoice());
}

function handlePaper(){
    playRound("Paper", getComputerChoice());
}

function handleScissors(){
    playRound("Scissors", getComputerChoice());
}

function initializeGameButtons() {
    const rockButton = document.querySelector(".button-rock");
    rockButton.addEventListener('click', handleRock);

    const paperButton = document.querySelector(".button-paper");
    paperButton.addEventListener('click', handlePaper);

    const scissorsButton = document.querySelector(".button-scissors");
    scissorsButton.addEventListener('click', handleScissors);
}

function updateDisplay() {
    const billboard = document.querySelector(".billboard");
    const computerScoreSection = document.querySelector(".computerScore");
    const playerScoreSection = document.querySelector(".playerScore");

    billboard.textContent = `Round ${roundNumber}`;
    computerScoreSection.textContent = computerScore;
    playerScoreSection.textContent = playerScore;
}

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);

let roundNumber = 0;
let playerScore = 0;
let computerScore = 0;

function startGame() {
    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;

    initializeGameButtons();
    roundNumber++;
    updateDisplay();
}
