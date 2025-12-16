const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore= 0
let computerScore = 0

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice){ 
    result = "EMPATE!";
    }
    else{
        switch(playerChoice){
            case "rock":
             result =  (computerChoice === "scissors") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
           break;
            case "paper":
             result =  (computerChoice === "rock") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
           break;
            case "scissors":
             result =  (computerChoice === "paper") ? "VOCÊ VENCEU!" : "VOCÊ PERDEU!";
           break;
            }
        
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;
    computerScoreDisplay.textContent = computerScore;
    playerScoreDisplay.textContent = playerScore;

    resultDisplay.classList.remove("greentext", "redtext");    

    switch(result){
        case "VOCÊ VENCEU!":
            resultDisplay.classList.add("greentext");
            playerScore++
            break;
        case "VOCÊ PERDEU!":
            resultDisplay.classList.add("redtext");
            computerScore++
        break;
    }
}