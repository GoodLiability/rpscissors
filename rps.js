let computerAns;
let playerAns;
let results;
let playerPick;
let rounds;
let pscore = 0;
let cscore = 0;

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

function playRound(playerAns){
    computerPlay();
    //playerSelection();
    if (playerAns == "rock"){
        if(computerAns == "rock"){
            results = "Tie!";
        }
        else if(computerAns == "paper"){
            results = "You lose...";
            cscore++;
        }
        else if(computerAns == "scissors"){
            results = "You WIN!";
            pscore++;
        }
    }
    else if (playerAns == "paper"){
        if(computerAns == "rock"){
            results = "You Win!";
            pscore++;
        }
        else if(computerAns == "paper"){
            results = "Tie!";
        }
        else if(computerAns == "scissors"){
            results = "You lose...";
            cscore++;
        }
    }
    else if (playerAns == "scissors"){
        if(computerAns == "rock"){
            results = "You lose...";
            cscore++;
        }
        else if(computerAns == "paper"){
            results = "You WIN!";
            pscore++;
        }
        else if(computerAns == "scissors"){
            results = "Tie!";
        }
    }

    //connected to html file, creates a div and uses dom to modify html data
    const outcome = document.querySelector('#outcome');
    const content = document.createElement('div');
    content.classList.add('outcome');

    if(pscore == 5){
        content.textContent = "You WIN!";
        outcome.appendChild(content)
    }
    else if(cscore == 5){
        content.textContent = "You lose...";
        outcome.appendChild(content)
    }

    //console.log(playerAns) //here to troubleshoot
    //console.log(computerAns)
    console.log(pscore)
    console.log(results)
    return results;
    
}

function game(){
    rounds = prompt("Enter the number of rounds you'd like to play.")
    for(let k = 0; k < rounds; k++){
        playRound();
        console.log(results);
    }
}

//making a button
var rbut = document.createElement("button");
rbut.innerHTML = "Rock";
var pbut = document.createElement("button");
pbut.innerHTML = "Paper";
var sbut = document.createElement("button");
sbut.innerHTML = "Scissors";
//append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(rbut);
body.appendChild(pbut);
body.appendChild(sbut);
//add event handler
rbut.addEventListener("click", function() {playRound("rock")});
pbut.addEventListener("click", function() {playRound("paper")});
sbut.addEventListener("click", function() {playRound("scissors")});