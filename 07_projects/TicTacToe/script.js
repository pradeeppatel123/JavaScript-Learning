const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newGameBtn = document.querySelector(".new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const main = document.querySelector("main");

let turnO = true; // playerX,playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // playerO
      box.innerHTML = "O";
      turnO = false;
    } else {
      // PlayerX
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,Winner is Player ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  main.classList.remove("hide");
};

const checkWinner = () => {
  let draw = true;
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        main.classList.add("hide");
        return;
      }
    }
  }
  // check draw
  for (let box of boxes) {
    if (box.innerText === "") {
      draw = false;
      break;
    }
  }
  if (draw) {
    msg.innerText = "Game is Draw";
    msgContainer.classList.remove("hide");
    main.classList.add("hide");
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
