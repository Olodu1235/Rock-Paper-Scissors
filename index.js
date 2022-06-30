function playerChoice() {
    const playerChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase();
    return playerChoice
}

function computerPlay(){
    let computerPlay = Math.random();
    if(computerPlay<0.34){
        computerPlay = "rock";
    }
    else if(computerPlay<=0.67){
        computerPlay = "paper";
    }
    else{
        computerPlay = "scissors";
    }
    return computerPlay
}
 function playRound(playerChoice, computerPlay){
     //Rock choice
     if(playerChoice == "rock" && computerPlay == "scissors"){
         return "you win! rock beats scissors";
     }
     else if(playerChoice == "rock" && computerPlay == "paper"){
         return "you lose! paper beats rock";
     }
     else if(playerChoice == "rock" && computerPlay == "rock"){
         return " its a draw!";
     }

     //paper choice
     else if (playerChoice == "paper" && computerPlay == "rock"){
         return "ypu win! paper beats rock";
     }
     else if(playerChoice == "paper" && computerPlay == "scissors"){
         return "you lose! scissors beats paper";

     }
     
     else if(playerChoice == "paper" && computerPlay == "paper"){
         return "its a draw!";

     }

     //scissors choice
     else if(playerChoice == "scissors" && computerPlay == "paper"){
         return "you win! scissors beats paper";
     }
     else if(playerChoice == "scissors" && computerPlay == "rock"){
         return "you lose! rock beats scissors";

     }
     else if(playerChoice == "scissors" && computerPlay == "scissors"){
         return "its a draw!";
     }
     else{
         return "something went wrong";
     }
 }

 console.log(playRound(playerChoice(),computerPlay()))


