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
    playerSelection = playerSelection.toLowerCase();
    let outcome;

    switch (playerSelection) {
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

    /*switch (outcome) {
        case 'Win':
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 'Lose':
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case 'Tie':
            return `It's a Tie - Player and Computer both chose ${computerSelection}`;
        default:
            return 'Invalid Player Input';

    }*/

    return outcome;
}

/*const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/

function game(){
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
}