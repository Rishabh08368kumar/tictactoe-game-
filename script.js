let boxes = document.querySelectorAll(".box");
let resetbutn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turno = true;   // set to turn o 
const winpattern = [
    [0,1,2],
    [0,3,6],   
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];





boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box clicked");
if(turno){
    box.innerText = "O";   // turno
    turno = false;   // set to next turn


}
else{
    box.innerText= "X";  // turn x
    turno=true;   // set to next turn

}
box.disabled   =  true;   // disable box after press one time

checkwinner();
    })
});

const checkwinner = () => {
for( let patterns of winpattern){
    let pos1 = boxes[patterns[0]].innerText;
        let pos2= boxes[patterns[1]].innerText;
            let pos3 = boxes[patterns[2]].innerText;

if(pos1 !="" && pos2 !="" && pos3 !=""){
    if(pos1 ===pos2 && pos2===pos3){
        // console.log("winner",pos1);
        showwinner(pos1);
    } 
}
}
};



const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`; //  this add msg to container;
    msgcontainer.classList.remove("hide");
    disableboxes();


};
const disableboxes = () => {  // disable all button after winner
for(let box of boxes){
    box.disabled= true;
}
};





const resetgame = () =>{    // reset func 
    turno = true;        // set to initial
    enableboxes();
    msgcontainer.classList.add("hide");  // hide the msg container

};
const enableboxes = () => {   //  enable all button to do reset game
for(let box of boxes){
    box.disabled= false;
    box.innerText="";
}
};


resetbutn.addEventListener("click",resetgame); //reset game func call
newgamebtn.addEventListener("click",resetgame); // new game func call
