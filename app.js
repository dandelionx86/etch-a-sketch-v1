document.addEventListener("DOMContentLoaded", function listen() {
  const container = document.querySelector(".container");
  let clearGridBtn = document.querySelector(".clearBtn");
  let submitBtnElement = document.querySelector("#submitBtn");
  let click = true;

  submitBtnElement.addEventListener("click", () => freeResponse());
  clearGridBtn.addEventListener("click", () => resetGrid());
  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.tagName != "BUTTON") {
      click = !click;
    }
  });

  function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");

      container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
      container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      container.appendChild(gridElement).classList.add("box");

      gridElement.addEventListener("mouseover", () => {
        if (click) {
          gridElement.style.backgroundColor = "black";
        }
      });
    }
  }

  function resetGrid() {
    const boxes = container.querySelectorAll(".box");
    boxes.forEach((box) => box.remove());
  }

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
});

// When clear button is clicked, the boxes/gridElements turn white but do not appear to be
// completely removed. However, you cannot begin sketching again until the submit button is
// clicked with an appropriate number as the input.
// QUESTION: How do I clear the applied color, but keep the current grid when the clear button is pressed?
// QUESTION: How do I reset the grid completely, including the input field?
