let playerSelection;
let playerScore = 0;
let computerScore = 0;
let totalGames = 0;

const body = document.querySelector("body");
const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const rpsStartArea = document.querySelector(".rps-start")
//storing buttons in variables

let rpsChoiceBar = document.createElement("div");
let rockChoice = document.createElement("button");
let paperChoice = document.createElement("button");
let scissorChoice = document.createElement("button");
let gameSpace = document.createElement("div");
rpsChoiceBar.appendChild(rockChoice);
rpsChoiceBar.appendChild(paperChoice);
rpsChoiceBar.appendChild(scissorChoice);
rockChoice.textContent = "rock";
paperChoice.textContent = "paper";
scissorChoice.textContent = "scissors";
rockChoice.classList.add("choice-button");
paperChoice.classList.add("choice-button");
scissorChoice.classList.add("choice-button");

yesButton.addEventListener("click", startGame);

function startGame() {
    createGameSpace();
    playerScore = 0;
    computerScore = 0;
}

function restartGame() {
    recreateGameSpace();
    playerScore = 0;
    computerScore = 0;
    totalGames = 0;
}

function recreateGameSpace() {
    gameSpace.textContent = "Rock, Paper, or Scissors?";
    gameSpace.classList.add(".game-space");
    body.appendChild(gameSpace);
    gameSpace.style.height = "600px";
    gameSpace.style.width = "100%";
    gameSpace.style.backgroundColor = "#1a548f";
    gameSpace.style.borderLeft = "5px solid #0c2f52";
    gameSpace.style.borderRight = "5px solid #0c2f52";
    gameSpace.style.borderBottom = "5px solid #0c2f52";
    gameSpace.style.margin = "auto";
    gameSpace.style.textAlign = "center";
    gameSpace.style.color = "white";
    gameSpace.style.fontSize = "20px";
    gameSpace.appendChild(rpsChoiceBar);
}

rockChoice.addEventListener("click", () => playRound("rock"));
paperChoice.addEventListener("click", () => playRound("paper"));
scissorChoice.addEventListener("click", () => playRound("scissors"));

function playRound(choice) {
    let computerPick = getComputerChoice();
    let playerPick = choice;
    console.log(`${playerPick} VS ${computerPick}`);
    let result = playGame(playerPick, computerPick);
    console.log(result);
    let resultSpace = document.createElement("p");
    gameSpace.appendChild(resultSpace);
    resultSpace.textContent = result;
    if (result == "win") {
        playerScore++;
    } else if (result == "lose") {
        computerScore++;
    };

    totalGames++;
    console.log(totalGames);
    if (totalGames > 4) {
        let winnerSpace = document.createElement("h1");
        if (playerScore > computerScore) {
            winnerSpace.textContent = "You Win!"
            gameSpace.appendChild(winnerSpace);
        }
        else if (playerScore < computerScore) {
            winnerSpace.textContent = "You Lose."
            gameSpace.appendChild(winnerSpace);
        } else if (playerScore == computerScore) {
            winnerSpace.textContent = "You tie."
            gameSpace.appendChild(winnerSpace);
        }
        playAgain();
}
}

function playAgain () {
    let playAgainDiv = document.createElement("div");
    playAgainDiv.textContent = "Play Again?";
    gameSpace.appendChild(playAgainDiv);
    let playAgainYes = document.createElement("button");
    let playAgainNo = document.createElement("button");
    playAgainYes.textContent = "Yes";
    playAgainNo.textContent = "No";
    gameSpace.appendChild(playAgainYes);
    gameSpace.appendChild(playAgainNo);
    playAgainYes.classList.add("choice-button");
    playAgainNo.classList.add("choice-button");
    playAgainYes.addEventListener("click", () => {
        restartGame();
    })
    playAgainNo.addEventListener("click", () => {
        let tyfp = document.createElement("div");
        tyfp.textContent = "Thanks for playing!";
        gameSpace.appendChild(tyfp);
    })

}
// if (totalGames > 4) {
//     let winnerSpace = document.createElement("h1");
//     if (playerScore > computerScore) {
//         winnerSpace.textContent = "You Win!"
//         gameSpace.appendChild(winnerSpace);
//     }
//     else if (playerScore < computerScore) {
//         winnerSpace.textContent = "You Lose."
//         gameSpace.appendChild(winnerSpace);
//     } else if (playerScore == computerScore) {
//         winnerSpace.textContent = "You tie."
//         gameSpace.appendChild(winnerSpace);
//     }
// }


//gets computer choice of rock, paper, scissor when called.
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

function createGameSpace() {
    body.removeChild(rpsStartArea);
    // let gameSpace = document.createElement("div");
    gameSpace.textContent = "Rock, Paper, or Scissors?";
    gameSpace.classList.add(".game-space");
    body.appendChild(gameSpace);
    gameSpace.style.height = "600px";
    gameSpace.style.width = "100%";
    gameSpace.style.backgroundColor = "#1a548f";
    gameSpace.style.borderLeft = "5px solid #0c2f52";
    gameSpace.style.borderRight = "5px solid #0c2f52";
    gameSpace.style.borderBottom = "5px solid #0c2f52";
    gameSpace.style.margin = "auto";
    gameSpace.style.textAlign = "center";
    gameSpace.style.color = "white";
    gameSpace.style.fontSize = "20px";
    // let rpsChoiceBar = document.createElement("div");
    gameSpace.appendChild(rpsChoiceBar);
    // let rockChoice = document.createElement("button");
    // let paperChoice = document.createElement("button");
    // let scissorChoice = document.createElement("button");
    // rpsChoiceBar.appendChild(rockChoice);
    // rpsChoiceBar.appendChild(paperChoice);
    // rpsChoiceBar.appendChild(scissorChoice);
    // rockChoice.textContent = "rock";
    // paperChoice.textContent = "paper";
    // scissorChoice.textContent = "scissors";
    // rockChoice.classList.add("choice-button");
    // paperChoice.classList.add("choice-button");
    // scissorChoice.classList.add("choice-button");
    
}

function roundPlay () {
    let computerPick = getComputerChoice();
}

// let computerSelection;

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

// function endResult(result) {
//     if (result === "win") {
//         console.log("You win!");
//     } else if (result === "lose") {
//         console.log("You lose...");
//     } else if (result === "tie") {
//         console.log("You tie.");
//     }
// }

// // console.log(playerSelection[0].toUpperCase() + playerSelection.slice(1) + " vs " + computerSelection[0].toUpperCase()+ computerSelection.slice(1));
// // let result = playGame(playerSelection, computerSelection);
// // endResult(result);


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         playerSelection = prompt("Rock, Paper or Scissors?");
//         playerSelection = playerSelection.toLowerCase();
//         computerSelection = getComputerChoice();
//         let result = playGame(playerSelection, computerSelection);
//         console.log(result);
//         if (result === "win") {
//             playerScore++;
//         } else if (result === "lose") {
//             computerScore++;
//         } 

//     }
//     if (playerScore > computerScore) {
//         console.log(`You beat the computer with a score of ${playerScore} to ${computerScore}!`);
//     } else if (playerScore < computerScore) {
//         console.log(`You lost to the computer with a score of ${playerScore} to ${computerScore}.`);
//     } else if (playerScore === computerScore){
//         console.log(`You tie with the computer with a score of ${playerScore} to ${computerScore}.`)
//     }
//     let replay = prompt("Play Again?");
//     replay = replay.toLowerCase();

//     if (replay === "yes") {
//         game();
//     } else if (replay === "no") {
//         console.log("Thanks for playing!");
//     }
    
// }

// game();



// //get random computer choice
// //random choice. 1 = rock 2 = paper 3 = scissor
// //return choice in variable


// //compare player choice to computer