let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset_btn");
let result = document.querySelector(".result");
let message = document.querySelector('#message');
let new_button = document.querySelector('#new_button');

let turno = true; 
const array_game = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6]             
];

const resetGame = () => {
    turno = true; 
    enableBoxes(); 
    result.classList.add("hide"); 
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false; 
        box.innerText = ""; 
        box.style.pointerEvents = "auto"; 
    });
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true; 
        box.style.pointerEvents = "none"; 
    });
};

const showWinner = (winner) => {
    message.innerText = `Congratulations, the winner is ${winner}!`;
    result.classList.remove("hide"); 
    disableBoxes(); 
};

const checkWinner = () => {
    for (let pattern of array_game) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val); 
            return; 
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { 
            box.innerText = turno ? "O" : "X"; 
            turno = !turno; 
            box.disabled = true; 
            checkWinner(); 
        }
    });
});

reset_btn.addEventListener("click", resetGame);

new_button.addEventListener("click", resetGame);
