let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let gameResult= document.getElementById("gameResult");
let buttonCont = document.getElementById("buttons");

let restart = document.createElement("button");
restart.classList.add("restart");
restart.textContent= "Restart";

restart.addEventListener('click', () => {
    location.reload();
});

let userScoreCount = 0;
let compScoreCount= 0;

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");


function computerPlay() {
    let computerChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
}


//write a function that plays a single round
//the function should take 2 parameters user selection and
//computer selection
function game(userSelection) {
computerSelection = computerPlay();
    switch (userSelection + computerSelection) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            return (result =
            userSelection + " is " + computerSelection + ", you draw");
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            userScoreCount++;
            userScore.textContent= "User Score: " + userScoreCount;
            return (result =
            userSelection + " beats " + computerSelection + ", you win");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            compScoreCount++;
            compScore.textContent = "Computer Score: " + compScoreCount;
            return (result =
            userSelection +
            " loses to " +
            computerSelection +
            ", you lose");
            break;
        }
          return result;
        }
 
function main(){
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        game(button.id);
        gameResult.textContent= result;
        if (userScoreCount==5){
         gameResult.textContent= "Congrats! You Win!";
        while (buttonCont.firstChild) {
             buttonCont.removeChild(buttonCont.firstChild);
        }
        buttonCont.appendChild(restart)
        }
        else if (compScoreCount==5){
            gameResult.textContent="You Lose! Try again!";
            while (buttonCont.firstChild) {
                buttonCont.removeChild(buttonCont.firstChild);
        }            buttonCont.appendChild(restart);
    };
    });
    })}

main();