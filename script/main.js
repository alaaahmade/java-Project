const computerChoice = document.getElementById("compyterimg");
const userChoice = document.getElementById("playerimg");
const resultGame = document.getElementById("Draw");
const playerscore = document.querySelector(".playerscore");
const computerscore = document.querySelector(".computerscore");
let btn = document.querySelectorAll("button");
const player = document.getElementById("playerimg");
const computer = document.getElementById("compyterimg");
const playerPoints = document.getElementById("pointplay");
const computerPoints = document.getElementById("pointcomp");
const cardwin = document.getElementById("card1")
const cardlus = document.getElementById("card2")
let playerchoi;
let computerchoi;
let draw;


let ppoints = parseInt(playerscore.innerHTML);
let cpoints = parseInt(computerscore.innerHTML);

let comppoint = parseInt(computerPoints.innerHTML);
let playpoint = parseInt(playerPoints.innerHTML);


btn.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        console.log(e.target.id);
        if (e.target.id === "again") {
            cpoints = 0;
            ppoints = 0;
            playpoint = 0;
            comppoint = 0;
            playerscore.innerHTML = ppoints;
            computerscore.innerHTML = cpoints;
            playerPoints.innerHTML = playpoint;
            computerPoints.innerHTML = comppoint;
        } else {
            computerChoice.classList.add("shakecompyterimg");
            userChoice.classList.add("shakeplayerimg");
            setTimeout(() => {

                computerChoice.classList.remove("shakecompyterimg");
                userChoice.classList.remove("shakeplayerimg");
                if (e.target.id === "rock") {
                    playerchoi = "rock";
                    player.src = "img/"+ playerchoi +"player.png";
                } else if (e.target.id === "paper") {
                    playerchoi = "paper";
                    player.src = "img/"+ playerchoi +"player.png";

                } else if (e.target.id === "scissors") {
                    playerchoi = "scissors";
                    player.src = "img/" + playerchoi + "player.png";

                }


                getRandom()
                getResult()
                getCard()
            }, 900)
        }

    })

});

function getRandom() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        computerchoi = "rock";
    } else if (randomNum === 2) {
        computerchoi = "paper";

    } else if (randomNum === 3) {
        computerchoi = "scissors";
    }
    computer.src = "img/" + computerchoi + "computer.png";

}

function getResult() {

    if (computerchoi === playerchoi) {
        draw = "It's A Draw".toUpperCase()
    } else {
        draw = " ";
    }
    if (computerchoi === "rock") {
        if (playerchoi === "paper") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        } else if (playerchoi === "scissors") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        }
    } else if (computerchoi === "paper") {
        if (playerchoi === "rock") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        } else if (playerchoi === "scissors") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        }
    } else if (computerchoi === "scissors") {
        if (playerchoi === "paper") {
            cpoints += 1;
            computerscore.innerHTML = cpoints;
        } else if (playerchoi === "rock") {
            ppoints += 1;
            playerscore.innerHTML = ppoints;
        }
    }
    if (cpoints >= 5) {
        cpoints = 0;
        ppoints = 0;
        comppoint += 1;
        playerscore.innerHTML = ppoints;
        computerscore.innerHTML = cpoints;
        computerPoints.innerHTML = comppoint;
    } else if (ppoints >= 5) {
        cpoints = 0;
        ppoints = 0;
        playerscore.innerHTML = ppoints;
        computerscore.innerHTML = cpoints;
        playpoint += 1;
        playerPoints.innerHTML = playpoint;

    }

    resultGame.innerHTML = draw

}

function getCard() {

    if (playpoint >= 5) {
        cardwin.style.top = "calc(50% - 200px)";
    } else if (comppoint >= 5) {
        cardlus.style.top = "calc(50% - 200px)";
    }

}

function clicedagain() {
    cardwin.style.top = "-100%";
    cardlus.style.top = "-100%";
}


