let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let computerRandom = Math.random();
    let computerChoice = "";

    if (computerRandom < 0.33) {
        computerChoice = "ROCK"
    }

    else if (computerRandom >=0.33 && computerRandom < 0.66) {
        computerChoice = "PAPER"
    }
    
    else {
        computerChoice = "SCISSORS"
    }

    return computerChoice;
}

function getHumanChoice() {

    let humanChoice = prompt("enter rock/paper/scissors");
    humanChoice = humanChoice.toUpperCase();

    return humanChoice;
}

function playRound(comp, hum, round) {
    if(comp == hum){
        console.log(`Round ${round}: DRAW!`);
    }

    else if ((comp == "ROCK" && hum == "SCISSORS") || (comp == "SCISSORS" && hum == "PAPER") || (comp == "PAPER" && hum == "ROCK")){
        console.log(`Round ${round}: COMPUTER WINS!`);
        computerScore++;
    }

    else {
        console.log(`Round ${round}: YOU WIN!`);
        humanScore++;
    }
    console.log(`You: ${humanScore} || Computer: ${computerScore}`);
}


