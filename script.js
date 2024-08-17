let box = document.querySelectorAll(".click-box");
let playerO = true;
var win_condition = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,5,7],
    [2,6,8],
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
        
                winner_decider();
            });
        });
    };


const winner_decider = () => {
    win_condition.forEach((conditions) => {
        boxvalue1= box[conditions[0]].innerText;
        boxvalue2= box[conditions[1]].innerText;
        boxvalue3= box[conditions[2]].innerText;
        if(boxvalue1 !=="" && boxvalue2 !=="" && boxvalue3 !==""){
            if(boxvalue1 === boxvalue2 && boxvalue2 === boxvalue3){
                alert("Game Over" ,boxvalue1 ,"Won");
                return true;
            }
        }
    })
};

let reset_game = document.querySelector("#reset-game");

reset_game.addEventListener("click", ()=> {
    playerO = true;
    box.forEach((boxes) =>{
        boxes.innerText = "";
    })
    clicker();
})