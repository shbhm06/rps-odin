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

let humanScore = 0;
let computerScore = 0;

