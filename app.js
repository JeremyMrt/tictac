const startBtn = document.getElementById("start-btn");
const header = document.querySelector("header");
const gameContent = document.querySelector(".game-content");

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  gameContent.classList.remove("hidden");

  header.classList.add("header-top");
  document.body.classList.add("header-top");
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
