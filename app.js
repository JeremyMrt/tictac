const startBtn = document.getElementById("start-btn");
const entryForm = document.querySelector(".entry-form");
const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const markers = document.querySelectorAll(".marker");
const nameInput = document.getElementById("name").value;
const header = document.querySelector("header");
const gameContent = document.querySelector(".game-content");

startBtn.addEventListener("click", () => {
  header.style.transform = "translateX(-100vw)";
  header.style.transition = "transform 0.8s ease";

  entryForm.style.transform = "translateX(0)";
  entryForm.style.transition = "transform 0.8s ease";
});

function changeFormPage() {
  form1.style.transform = "translateX(-100vw)";
  form1.style.transition = "transform 0.8s ease";
  form2.style.transform = "translateX(0)";
  form2.style.transition = "transform 0.8s ease";
}

markers.forEach((marker) => {
  marker.addEventListener("click", (e) => {
    const chosenMarker = e.target.id;
    const player1 = Player(nameInput, chosenMarker);

    form2.style.transform = "translateX(-100vw)";
    form2.style.transition = "transform 0.8s ease";
    gameContent.style.transform = "translateX(0)";
    gameContent.style.transition = "transform 0.8s ease";
  });
});

const gameBoard = (() => {
  const gameBoardContent = document.createElement("div");

  gameBoardContent.classList.add("gameboard");

  let gameBoardArray = ["", "X", "", "O", "i", "", "X", "X", "X"];

  gameBoardArray.forEach((item) => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("gameboard-square");
    squareDiv.textContent = item;
    gameBoardContent.appendChild(squareDiv);
  });

  gameContent.appendChild(gameBoardContent);
})();

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;

  return { getName, getMarker };
};
