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