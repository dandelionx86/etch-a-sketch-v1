document.addEventListener("DOMContentLoaded", function listen() {
  const container = document.querySelector(".container");
  // let btnElements = document.querySelectorAll(".gridControls");
  let clearGridBtn = document.querySelector(".clearBtn");
  let submitBtnElement = document.querySelector("#submitBtn");

  // for (let btnElement of btnElements) {
  //   btnElement.addEventListener("click", (event) => gridSize(event));
  // }

  submitBtnElement.addEventListener("click", () => freeResponse());
  clearGridBtn.addEventListener("click", () => resetGrid());

  // function gridSize(event) {
  //   const currentBtnElement = event.target;
  //   // if (currentBtnElement.classList.contains("10x10")) {
  //   //   console.log("10x10 clicked");
  //   //   resetGrid();
  //   //   createGrid(10, 10);
  //   // } else if (currentBtnElement.classList.contains("16x16")) {
  //   //   console.log("16x16 clicked");
  //   //   resetGrid();
  //   //   createGrid(16, 16);
  //   // } else if (currentBtnElement.classList.contains("24x24")) {
  //   //   console.log("24x24 clicked");
  //   //   resetGrid();
  //   //   createGrid(24, 24);
  //   // } else if (currentBtnElement.classList.contains("clearBtn")) {
  //   //   resetGrid();
  //   // }

  //   if (currentBtnElement.classList.contains("clearBtn")) {
  //     resetGrid;
  //   }
  // }

  function freeResponse() {
    let answerInputElement = document.querySelector("#freeResponse");
    var x = answerInputElement.value;

    resetGrid();

    if (x > 100) {
      alert("Value to big. Enter a number less than 100.");
    } else {
      createGrid(x);
    }
  }

  function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");

      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      container.appendChild(gridElement).classList.add("box");

      // gridElement.style.border = "1px solid black";

      gridElement.addEventListener("mouseover", () => {
        gridElement.style.backgroundColor = "black";
      });
    }
  }

  function resetGrid() {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach((box) => box.remove());
  }
});
