let playerSelection = prompt("Rock, Paper or Scissors?");
playerSelection = playerSelection.toLowerCase();

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

let computerSelection = getComputerChoice();

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

console.log(playerSelection[0].toUpperCase() + playerSelection.slice(1) + " vs " + computerSelection[0].toUpperCase()+ computerSelection.slice(1));
let result = playGame(playerSelection, computerSelection);
endResult(result);



// if (playerSelection === "rock" && computerSelection === "rock") {
//     console.log("You tie! Rock ties with Rock.");
// } else if (playerSelection === "rock" && computerSelection === "paper") {
//     console.log("You lose! Rock loses to Paper.");
// } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     console.log("You win! Rock beats Scissors.");
// }

// if (playerSelection === "paper" && )

//get random computer choice
//random choice. 1 = rock 2 = paper 3 = scissor
//return choice in variable


//compare player choice to computer
//

//