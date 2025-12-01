let moves = ["ROCK","PAPER","SCISSORS","ROCK","PAPER","SCISSORS"];

let computer = document.querySelector(".computer")
function computerMove(){
    let random = Math.floor(Math.random() * 6)
    computer.innerText = moves[random]
}
let btns = document.querySelectorAll("button")
let input = document.querySelector(".player");

for(let btn of btns) {
    btn.addEventListener("click", ()=> {
        console.log("button clicked"); 
        console.log(btn.innerText)
        if(btn.innerText == "ROCK") {
            input.innerText = "ROCK";
        }
        else if(btn.innerText == "PAPER") {
            input.innerText = "PAPER";
        }
        else if(btn.innerText == "SCISSORS") {
            input.innerText = "SCISSORS";
        }
        else {
            input.innerHTML = "";
        }
        computerMove();
        result();
    })
}

let computerScore = 0;
let playerScore = 0;

function result() {
    let output = document.querySelector("h3")
    if(input.innerHTML ==  "ROCK" && computer.innerText ==  "SCISSORS") {
        output.innerText = "YOU WIN!"
    }
    else if(input.innerHTML ==  "ROCK" && computer.innerText ==  "PAPER") {
        output.innerText = "YOU LOST!"
    }
    else if(input.innerHTML ==  "PAPER" && computer.innerText ==  "SCISSORS") {
        output.innerText = "YOU LOST!"
    }
    else if(input.innerHTML ==  "PAPER" && computer.innerText ==  "ROCK") {
        output.innerText = "YOU WIN!"
    }
    else if(input.innerHTML ==  "SCISSORS" && computer.innerText ==  "PAPER") {
        output.innerText = "YOU WIN!"
    }
    else if(input.innerHTML ==  "SCISSORS" && computer.innerText ==  "ROCK") {
        output.innerText = "YOU LOST!"
    }
    else{
        output.innerText = "DRAW!"
    }

    if(output.innerText == "YOU WIN!") {
        playerScore++;
        output.style.color = "green"
    }
    else if (output.innerText == "YOU LOST!") {
        computerScore++;
        output.style.color = "red"
    }
    else {
        output.style.color = "black"
    }

    let ps = document.querySelector(".player-score")
    let cs = document.querySelector(".computer-score")
    ps.innerText = "YOU: " + playerScore;
    cs.innerText = "COMPUTER: " + computerScore;
    
}