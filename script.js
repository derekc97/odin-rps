let playerSelection;

function getComputerChoice () {
    let roll = Math.floor(Math.random()*3);
    if (roll === 0) {
        return "rock";
    } else if (roll === 1) {
        return "paper";
    } else if (roll === 2) {
        return "scissors";
    }
}

let computerSelection;

function playGame(player, computer) {
    if (player === "rock" && computer === "rock") {
        let result = "tie";
        return result;
    } else if (player === "rock" && computer === "paper") {
        let result = "lose";
        return result;
    } else if (player === "rock" && computer === "scissors") {
        let result = "win";
        return result;
    }

    if (player === "paper" && computer === "paper") {
        let result = "tie";
        return result;
    } else if (player === "paper" && computer === "scissors") {
        let result = "lose";
        return result;
    } else if (player === "paper" && computer === "rock") {
        let result = "win";
        return result;
    }

    if (player === "scissors" && computer === "scissors") {
        let result = "tie";
        return result;
    } else if (player === "scissors" && computer === "rock") {
        let result = "lose";
        return result;
    } else if (player === "scissors" && computer === "paper") {
        let result = "win";
        return result;
    }
}

function endResult(result) {
    if (result === "win") {
        console.log("You win!");
    } else if (result === "lose") {
        console.log("You lose...");
    } else if (result === "tie") {
        console.log("You tie.");
    }
}

// console.log(playerSelection[0].toUpperCase() + playerSelection.slice(1) + " vs " + computerSelection[0].toUpperCase()+ computerSelection.slice(1));
// let result = playGame(playerSelection, computerSelection);
// endResult(result);


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
        let result = playGame(playerSelection, computerSelection);
        console.log(result);
        if (result === "win") {
            playerScore++;
        } else if (result === "lose") {
            computerScore++;
        } 

    }
    if (playerScore > computerScore) {
        console.log(`You beat the computer with a score of ${playerScore} to ${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lost to the computer with a score of ${playerScore} to ${computerScore}.`);
    } else if (playerScore === computerScore){
        console.log(`You tie with the computer with a score of ${playerScore} to ${computerScore}.`)
    }
    let replay = prompt("Play Again?");
    replay = replay.toLowerCase();

    if (replay === "yes") {
        game();
    } else if (replay === "no") {
        console.log("Thanks for playing!");
    }
    
}

game();



//get random computer choice
//random choice. 1 = rock 2 = paper 3 = scissor
//return choice in variable


//compare player choice to computer
//

//