const boxes = document.querySelectorAll('.boxes');
let turn = "0";
let h2 = document.querySelector('h2');
let gameWin = false;
let reset = document.querySelector('.reset');
let count = 0;

const winningPatter = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disable = ()=>{
    for(const box of boxes){
        box.disabled = true
    }
}

const winnerCheck = ()=>{
    for(const pattern of winningPatter){
        let value1 = boxes[pattern[0]].innerHTML;
        let value2 = boxes[pattern[1]].innerHTML;
        let value3 = boxes[pattern[2]].innerHTML;
        if(value1 != "" && value2 != "" && value3 != ""){
            if(value1===value2 && value2== value3){
                boxes[pattern[0]].style.backgroundColor = 'red';
                boxes[pattern[1]].style.backgroundColor = 'red';
                boxes[pattern[2]].style.backgroundColor = 'red';
                gameWin = true;
                h2.classList.remove('hide');
                h2.innerHTML = `winner is ${value1}`;
                disable()
            };
        };
    };
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn == "X"){
            box.innerHTML = "0";
            turn = "0";
        }else{
            box.innerHTML = "X";
            turn = "X";
        }
        box.disabled = true;
        winnerCheck();
        count += 1;
        if(count==9 && gameWin == false){
            h2.innerText = 'Match Draw'
            h2.classList.remove('hide');
            console.log("draw");
        };
    });
});

reset.addEventListener('click',()=>{
    for(const box of boxes){
        box.innerHTML = "";
        box.disabled = false;
        turn = "0";
        box.style.backgroundColor = "rgb(28, 27, 27)";
    };
    h2.classList.add('hide');
    count = 0;
    gameWin = false
});