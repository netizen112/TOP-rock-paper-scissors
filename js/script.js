function randNum(num){
    //Generates a random number between 1 and num
    return Math.floor((Math.random() * num) + 1)
}

function computerPlay(){
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

function playRound(playerSelection, computerSelection){
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
            outcome ='Invalid Input';
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
}

function clickHandler(e) {
    playRound(e.srcElement.id, computerPlay());
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', clickHandler);

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', clickHandler);

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', clickHandler);

/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/

/*function game(){
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}:`);

        let playerSelection = prompt(`Enter Rock, Paper or Scissors!`);
        let computerSelection = computerPlay();

        let outcome = playRound(playerSelection, computerSelection);

        switch (outcome) {
            case 'Win':
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
                break;
            case 'Lose':
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
            case 'Tie':
                console.log(`It's a Tie - Player and Computer both chose ${computerSelection}`);
                break;
            case 'Invalid Input':
                console.error('Invalid input');
                i--;
                break;
        }

        console.log(`Player Score: ${playerScore}. Computer Score: ${computerScore}`);
    }

    switch(true) {
        case (playerScore == computerScore):
            console.log("Game over! It's a tie.")
            break;
        case (playerScore > computerScore):
            console.log("Game over - Player Wins!");
            break;
        case (computerScore > playerScore):
            console.log("Game over - Computer Wins!");
            break;
        default:
            console.error();
            break;
    }
}*/