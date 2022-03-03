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
    playerSelection = (playerSelection.charAt(0).toUpperCase()) + playerSelection.slice(1);
    let outcome;

    switch (playerSelection) {
        case 'Rock':
            outcome = (computerSelection == 'Paper') ? 'Lose' : (computerSelection == 'Scissors') ? 'Win' : 'Tie';
            break;
        case 'Paper':
            outcome = (computerSelection == 'Scissors') ? 'Lose' : (computerSelection == 'Rock') ? 'Win' : 'Tie';
            break;
        case 'Scissors':
            outcome = (computerSelection == 'Rock') ? 'Lose' : (computerSelection == 'Paper') ? 'Win' : 'Tie';
            break;
        default: 'Invalid Input';
    }

    switch (outcome) {
        case 'Win':
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        case 'Lose':
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        case 'Tie':
            return `It's a Tie - Player and Computer both chose ${computerSelection}`;
        default:
            return 'Invalid Player Input';

    }
}