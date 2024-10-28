document.addEventListener("DOMContentLoaded", function() {
    let turn = 1;
    let boMem = Array(9).fill(null);
    let setup = 0;

    const setX = "X";
    const setO = "O";
    let currentShape = setX;

    const winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    let board = document.getElementById("board");
    for (const child of board.children) {
        child.setAttribute("class", "square");
        child.setAttribute("id", setup);
        setup+=1;
    }

    let boxes = Array.from(document.getElementsByClassName("square"));

    boxes.forEach(box => box.addEventListener("click", function(){
        let position = box.id;
        let check = winningPlay();
        if(!boMem[position]){
            if(check == false){
                boMem[position] = currentShape;
                box.innerText = currentShape;
            }
            if(check !== false){
                statScreen = document.getElementById("status");
                statScreen.classList.add("you-won");
                if(check == "X"){
                    statScreen.innerText = "Congratulations! X is the Winner!";
                }else{
                    statScreen.innerText = "Congratulations! O is the Winner!";
                }       
            }

            if(currentShape == setX){
                box.setAttribute("class", "square X");
                currentShape = setO;
                turn+= 1;
            }else{
                box.setAttribute("class", "square O");
                currentShape = setX;
                turn+= 1;
            }
        }

    }))

    function winningPlay(){
        for(win of winner){
            let [a, b, c] = win;
            check = boMem[a] 

            if(check && boMem[b] == check && check == boMem[c]){
                return check;
            }
        }
        return false;
    }
    
    boxes.forEach(box => box.addEventListener("mouseover", function(){
        box.classList.add("hover");
    }))

    boxes.forEach(box => box.addEventListener("mouseout", function(){
        box.classList.remove("hover");
    }))
});
