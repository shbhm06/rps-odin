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

const you = document.querySelector(".you");
const comp = document.querySelector(".comp");

const yourScore = document.querySelector(".yourScore");
const compScore = document.querySelector(".compScore");

const result = document.querySelector(".result");

document.querySelector("#rock").addEventListener("click", () => { playRound("ROCK"); });
document.querySelector("#paper").addEventListener("click", () => { playRound("PAPER"); });
document.querySelector("#scissors").addEventListener("click", () => { playRound("SCISSORS"); });

function playRound(humanChoice) {
    if (humanScore >=5 || computerScore >=5) return;

    const computerChoice = getComputerChoice();

    you.textContent = humanChoice;
    comp.textContent = computerChoice;

    if (computerChoice == humanChoice){
        
    }

    else if ((computerChoice == "ROCK" && humanChoice == "SCISSORS") || (computerChoice == "SCISSORS" && humanChoice == "PAPER") || (computerChoice == "PAPER" && humanChoice == "ROCK")){
        computerScore++;
        
    }

    else {
        humanScore++;
    }

    yourScore.textContent = humanScore;
    compScore.textContent = computerScore;

    if (humanScore === 5 || computerScore === 5){
        declareWinner();
    }
}

function declareWinner(){
    if(humanScore === 5){
        result.textContent = "YOU WIN!";
    }
    else if(computerScore === 5){
        result.textContent = "COMPUTER WINS!";
    }
    else {
        result.textContent = "ITS A DRAW";
    }
}

