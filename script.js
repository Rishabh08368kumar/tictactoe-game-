let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");


const drawgame = () =>{
    console.log("draw");
    msg.innerText="draw, play again";
    msg.style.backgroundColor = "#081b31";
}
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText= userscore;

        console.log("win");
        msg.innerText= `you win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        compscore++;
         compscorepara.innerText= compscore;
        console.log("not win");
        msg.innerText=`you loose ${compchoice} beats  your ${userchoice}`;

msg.style.backgroundColor = "red";
    }
};

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};




 
const playgame = (userchoice) =>{
    console.log("user choice = ",userchoice);
    const compchoice = gencompchoice();
    console.log("compchoice= ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            userwin = compchoice==="paper" ? false : true;
        }
       else if(userchoice==="paper"){
            userwin = compchoice==="scissors" ? false : true;
        }
        else{
            userwin = compchoice==="rock" ? true : false;
        }


    
    showwinner(userwin,userchoice,compchoice);}
};









choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
}
);