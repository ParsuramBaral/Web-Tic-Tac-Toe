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


function clicker(){
    box.forEach((boxes) =>{
    boxes.addEventListener("click", () =>{
            if(playerO){
                boxes.innerText = "O";
                playerO= false;
            } else{
                boxes.innerText = "X";
                playerO= true;
            }
            boxes.disabled = true;  
            click_count++;
            winner_decider();
        });
    });
};

reset_game.addEventListener("click", ()=> {
    box.forEach((boxes) =>{
        boxes.innerText = "";
        boxes.disabled = false;
    })
    winner.innerText = "";
    draw.innerText = "";
    playerO = true;
    click_count = 0;
})

const disablebox = () => {
    box.forEach((boxes) =>{
        boxes.disabled = true;
    })
}

clicker();
const winner_decider = () => {
    win_condition.forEach((conditions) => {
        boxvalue1= box[conditions[0]].innerText;
        boxvalue2= box[conditions[1]].innerText;
        boxvalue3= box[conditions[2]].innerText;
        if (boxvalue1 !=="" && boxvalue2 !=="" && boxvalue3 !=="") {
            if (boxvalue1 === boxvalue2 && boxvalue2 === boxvalue3) {
                winner.innerText = `Congratulations ${boxvalue1} You have Won`;
                disablebox();
                } else if (click_count === 9){
                    draw.innerText = `OPPS! The match was drawn`;
                    disablebox();
                }
        }
    })
};