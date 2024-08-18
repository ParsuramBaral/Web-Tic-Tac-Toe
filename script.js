var box = document.querySelectorAll(".click-box");
let playerO = true;
let reset_game = document.querySelector("#reset-game");
let click_count = 0;
let winner = document.querySelector("#Winner");
let draw = document.querySelector("#draw");
var win_condition = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]


const computerturn =() =>{
   var remainingboxes = Array.from(box).filter(boxes => boxes.textContent === "");
    if (remainingboxes.length >0){
        index = Math.floor(Math.random()*remainingboxes.length);
        randombox = remainingboxes[index];
        randombox.textContent = "X";
        click_count +=1;
        winner_decider();
        if (click_count === 9 && winner.innerText === "") {
            draw.innerText = `Oops! The match was drawn`;
            disablebox();
        }
    };
};
function clicker(){
    box.forEach((boxes) =>{
        boxes.addEventListener("click", () =>{
            if(playerO){
                boxes.innerText = "O";
                playerO= false;
                click_count +=1;
                winner_decider();
                if (click_count === 9 && winner.innerText === "") {
                    draw.innerText = `Oops! The match was drawn`;
                    disablebox();
                }

                if(winner.innerText === ""){
                    setTimeout(() => {
                        computerturn();
                        playerO = true;
                    }, 400);
                }
            }
            boxes.disabled = true;  
        });
    });
} 

reset_game.addEventListener("click", ()=> {
    box.forEach((boxes) =>{
        boxes.innerText = "";
        boxes.disabled = false;
    });
    winner.innerText = "";
    draw.innerText = "";
    playerO = true;
    click_count = 0;
});

const disablebox = () => {
    box.forEach((boxes) =>{
        boxes.disabled = true;
    });
}

clicker();

const winner_decider = () => {
    win_condition.forEach((conditions) => {
        let boxvalue1= box[conditions[0]].innerText;
        let boxvalue2= box[conditions[1]].innerText;
        let boxvalue3= box[conditions[2]].innerText;
        if (boxvalue1 !=="" && boxvalue2 !=="" && boxvalue3 !=="") {
            if (boxvalue1 === boxvalue2 && boxvalue2 === boxvalue3) {
                if(boxvalue1 === "O") { 
                    winner.innerText = "Congratulations Player has Won";
                    disablebox();
                    return; } 
                else{
                    winner.innerText = "OPPS! Computer has Won";
                    disablebox();
                    return;
                }
            }
        }
    });    
};