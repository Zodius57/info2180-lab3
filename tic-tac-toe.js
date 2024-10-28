document.addEventListener("DOMContentLoaded", function() {
    let turn = 1;
    let boMem = Array(9).fill(null);
    let setup = 0;

    const setX = "X";
    const setO = "O";
    let currentShape = setX;

    let board = document.getElementById("board");
    for (const child of board.children) {
        child.setAttribute("class", "square");
        child.setAttribute("id", setup);
        setup+=1;
    }

    let boxes = Array.from(document.getElementsByClassName("square"));

    boxes.forEach(box => box.addEventListener("click", function(){
        let position = box.id;
        if(!boMem[position]){
            boMem[position] = currentShape;
            box.innerText = currentShape;

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
    
    boxes.forEach(box => box.addEventListener("mouseover", function(){
        box.classList.add("hover");
    }))

    boxes.forEach(box => box.addEventListener("mouseout", function(){
        box.classList.remove("hover");
    }))
});
