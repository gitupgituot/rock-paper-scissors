function computerPlay() {
    let play = Math.floor(Math.random()*3);
    let playVerbose;
    switch (play) {
        case 0:
            playVerbose = 'rock';
            break;
        case 1:
            playVerbose = 'paper';
            break;
        case 2:
            playVerbose = 'scissors';
            break;
    };
    return playVerbose;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return ("Tie!")
    } else {
        if (playerSelection === 'rock') {
            return (computerSelection === 'paper') ? 'You lose! Paper beats rock' : 'You win! Rock beats scissors';
        } else if (playerSelection === 'paper') {
            return (computerSelection === 'rock') ? 'You win! Paper beats rock' : 'You lose! Scissors beat paper';
        } else if (playerSelection === 'scissors') {
            return (computerSelection === 'rock') ? 'You lose! Rock beats Scissors' : 'You win! Scissors beat paper';
        }
    }
}

console.log(playRound('paper' , 'paper'));