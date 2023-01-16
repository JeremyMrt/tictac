const startBtn = document.getElementById("start-btn");
const entryForm = document.querySelector(".entry-form");
const nameInput = document.getElementById("name").textContent;
const header = document.querySelector("header");
const gameContent = document.querySelector(".game-content");

startBtn.addEventListener("click", () => {
  header.classList.add("hidden");
  entryForm.classList.remove("hidden");
});

const gameBoard = (() => {
  const gameBoardContent = document.createElement("div");

  gameBoardContent.classList.add("gameboard");

  let gameBoardArray = ["X", "X", "", "O", "i", "O", "X", "X", "X"];

  gameBoardArray.forEach((item) => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("gameboard-square");
    squareDiv.textContent = item;
    gameBoardContent.appendChild(squareDiv);
  });

  gameContent.appendChild(gameBoardContent);
})();

const Player = (name, marker) => {
  let playerName = name;
  let chosenMarker = marker;
};
