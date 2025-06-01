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

