let computerAns;
let playerAns;
let results;
let playerPick;
let rounds;

function computerPlay() {
    let ran = Math.floor(Math.random()*3)
    if (ran == 0){
        computerAns = "rock";
    }
    else if (ran == 1){
        computerAns = "paper";
    }
    else if (ran == 2){
        computerAns = "scissors";
    }
    return computerAns;
}

function playerSelection(){
       playerPick = prompt("Enter your choice.")
       playerAns = playerPick.toLowerCase();
       return playerAns;
}

function playRound(){
    computerPlay();
    playerSelection();
    if (playerAns == "rock"){
        if(computerAns == "rock"){
            results = "Tie!";
        }
        else if(computerAns == "paper"){
            results = "You lose...";
        }
        else if(computerAns == "scissors"){
            results = "You WIN!";
        }
    }
    else if (playerAns == "paper"){
        if(computerAns == "rock"){
            results = "You Win!";
        }
        else if(computerAns == "paper"){
            results = "Tie!";
        }
        else if(computerAns == "scissors"){
            results = "You lose...";
        }
    }
    else if (playerAns == "scissors"){
        if(computerAns == "rock"){
            results = "You lose...";
        }
        else if(computerAns == "paper"){
            results = "You WIN!";
        }
        else if(computerAns == "scissors"){
            results = "Tie!";
        }
    }
    //console.log(playerAns) //here to troubleshoot
    //console.log(computerAns)
    return results;
}

function game(){
    rounds = prompt("Enter the number of rounds you'd like to play.")
    for(let k = 0; k < rounds; k++){
        playRound();
        console.log(results);
    }
}