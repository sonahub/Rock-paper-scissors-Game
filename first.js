let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

//generate computer choice
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawgame = () => {
    msg.innerText = "game was draw.Play again.";
    msg.style.backgroundColor = "black";
};

const showWinner = (userwin, userChoice,compChoice) => {
    if(userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("userchoice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("compchoice = ",compChoice);

    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper"? false : true;
        } else if(userChoice === "paper") {
            userwin = compChoice === "rock" ? true : false;
        } else  {
            userwin = compChoice === "paper"? true : false;
        } showWinner(userwin, userChoice, compChoice);
    }
}; 
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
