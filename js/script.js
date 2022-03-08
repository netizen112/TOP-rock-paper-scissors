let gameOver;

function randNum(num) {
    //Generates a random number between 1 and num
    return Math.floor((Math.random() * num) + 1)
}

function computerPlay() {
    //Uses the randNum function and returns either 'Rock', 'Paper' or 'Scissors'
    switch (randNum(3)) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
        default: return null;
    }
}

function playRound(playerSelection, computerSelection) {
    //playerSelection = playerSelection.toLowerCase();
    let outcome;

    switch (playerSelection) {
        //This sets the outcome to 'Win', 'Lose' or 'Tie'
        case 'rock':
            outcome = (computerSelection == 'Paper') ? 'Lose' : (computerSelection == 'Scissors') ? 'Win' : 'Tie';
            break;
        case 'paper':
            outcome = (computerSelection == 'Scissors') ? 'Lose' : (computerSelection == 'Rock') ? 'Win' : 'Tie';
            break;
        case 'scissors':
            outcome = (computerSelection == 'Rock') ? 'Lose' : (computerSelection == 'Paper') ? 'Win' : 'Tie';
            break;
        default:
            outcome = 'Invalid Input';
            break;
    }

    const disp = document.querySelector('#resultDisplay'); //Selects the element that will display the result string
    function displayResult(string) {
        //Displays result string in the #resultDisplay div
        disp.textContent = string;
    }

    switch (outcome) {
        case 'Win':
            displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);
            disp.style.backgroundColor = 'green';
            break;
        case 'Lose':
            displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
            disp.style.backgroundColor = 'red';
            break;
        case 'Tie':
            displayResult(`It's a Tie - Player and Computer both chose ${computerSelection}`);
            disp.style.backgroundColor = 'beige';
            break;
        default:
            displayResult('Invalid Player Input');
            break;
    }

    return outcome;
}



function game() {
    startBtn.textContent = 'Restart';
    let roundNumber, playerScore, computerScore, roundOver, outcome;


    const titleBar = document.querySelector('#titleBar');
    const btnRock = document.querySelector('#rock');
    const btnPaper = document.querySelector('#paper');
    const btnScissors = document.querySelector('#scissors');
    const playerScoreCounter = document.querySelector('#playerScoreCounter');
    const computerScoreCounter = document.querySelector('#computerScoreCounter');
    const resultDisplay = document.querySelector('#resultDisplay');

    function clickHandler(e) {
        outcome = playRound(e.srcElement.id, computerPlay());
        progressRound();
    }

    function initialise() {
        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;
        roundOver = false;

        btnRock.addEventListener('click', clickHandler);
        btnPaper.addEventListener('click', clickHandler);
        btnScissors.addEventListener('click', clickHandler);

        titleBar.textContent = `Playing Round ${roundNumber}`;
        playerScoreCounter.textContent = `${playerScore}`;
        computerScoreCounter.textContent = `${computerScore}`;
        resultDisplay.textContent = '';
        resultDisplay.style.backgroundColor = 'blanchedalmond';
    }

    initialise();

    function progressRound() {

        switch (outcome) {
            case 'Win':
                playerScore++;
                playerScoreCounter.textContent = playerScore;
                break;
            case 'Lose':
                computerScore++;
                computerScoreCounter.textContent = computerScore;
                break;
            case 'Tie':
                break;
            default: break;
        }

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore == 5) {
                titleBar.textContent = `You Win!`;
            } else {
                titleBar.textContent = `You lose :(`
            }

            btnRock.removeEventListener('click', clickHandler)
            btnPaper.removeEventListener('click', clickHandler);
            btnScissors.removeEventListener('click', clickHandler);

            return;
        }

        roundNumber++;
        titleBar.textContent = `Playing Round ${roundNumber}`;
    }
}

const startBtn = document.querySelector('#startButton');
startBtn.addEventListener('click', game);