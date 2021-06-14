let userScore = document.getElementById("userScore");
let compScore = document.getElementById("compScore");
let gameResult= document.getElementById("gameResult");
let imgContainer = document.getElementById("imgs");

let restart = document.createElement("button");
restart.classList.add("restart");
restart.textContent= "Restart";

restart.addEventListener('click', () => {
    location.reload();
});

let userScoreCount = 0;
let compScoreCount= 0;



// buttons is a node list. It looks and acts much like an array.
let imgs = document.querySelectorAll("img");


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
            return draw(userSelection);
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            return win(userSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            return lose(userSelection);
            break;
        }
        }

function draw(userSelection){
    compScore.textContent=  compScoreCount;
    userScore.textContent=  userScoreCount;
    if (userSelection= "rock"){
        gameResult.textContent= "The Rock cannot beat himself. DRAW!"
    }
    else {
        gameResult.textContent= userSelection + " is " + computerSelection + ", you draw";
    }
}

function win(userSelection){
    userScoreCount++;
    compScore.textContent= compScoreCount;
    userScore.textContent=  userScoreCount;
    if (userSelection== "rock"){
    gameResult.textContent= "The Rock always WINS in a scissor fight!"
    }
    else if (userSelection=="paper"){
        gameResult.textContent= "Toilet paper smothers the Rock. You WIN!";
    }
    else {
        gameResult.textContent= "Scissors cut up paper. You WIN!"
    }
}

function lose(userSelection){
    compScoreCount++;
    compScore.textContent=  compScoreCount;
    userScore.textContent=  userScoreCount;
    if (userSelection== "rock"){
        gameResult.textContent= "The Rock gets smothered by toilet paper. You LOSE!"
    }
    else if (userSelection=="paper"){
        gameResult.textContent= "Paper is cut by scissors. You LOSE!";
    }
    else {
        gameResult.textContent= "Scissors are no match against the Rock. You LOSE!"
    }
}
 
function main(){
    imgs.forEach((img) => {
        img.addEventListener('click', () => {
        game(img.id);
        if (userScoreCount==5){
         gameResult.textContent= "Congrats! You Win!";
        while (imgContainer.firstChild) {
             imgContainer.removeChild(imgContainer.firstChild);
        }
        imgContainer.appendChild(restart)
        }
        else if (compScoreCount==5){
            gameResult.textContent="You Lose! Try again!";
            while (imgContainer.firstChild) {
                imgContainer.removeChild(imgContainer.firstChild);
        }            imgContainer.appendChild(restart);
    };
    });
    })}

main();