const choice=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore=0;
let compScore=0;

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}   
const drawGame=()=>{
    msg.innerText='Game was Draw! Play again'

}
const showWinner=(userWin,userChoice,compchoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win! Your ${userChoice} beats Computer's ${compchoice}`
}
else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. Computer ${compChoice} beats your ${userChoice}`;
}
}
const game=(userChoice)=>{
    const compchoice=genCompChoice();
    if(userChoice===compchoice){
        drawGame();
    }
    else{
     let userWin=true;
        if(userChoice=='rock'){
            userWin=compchoice==='paper'?false:true;
        }
        else if(userChoice==='paper'){
          userWin=compchoice==='scissor'?false:true;
        }
        else{
            userWin=compchoice==='rock'?false:true;
        }
        showWinner(userWin,userChoice,compchoice)
    }

};
choice.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        game(userChoice);
    })

})
