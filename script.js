// * Node elements
const inputNumberNode = document.getElementById("input-number");
const infoNode = document.querySelector(".info");
const startBtnNode = document.querySelector(".start-btn");
const inputContainerNode = document.querySelector(".input");

let randomNumber = 0;

// * Functions
function setTextColor(color, node) {
  node.setAttribute("style", `color: ${color}`);
}

function changeInfoText(text) {
  infoNode.textContent = `${text}`;
}

function changeUserNumber(number) {
  inputNumberNode.value = number;
}

function hide(item) {
  item.setAttribute("style", "visibility: hidden");
}

function show(item) {
  item.setAttribute("style", "visibility: visible");
}

function setNewRandomNumber() {
  randomNumber = Math.ceil(Math.random() * 100);
}

function restart() {
  changeInfoText("Input new number");
  setTextColor("blue", infoNode);
  setNewRandomNumber();
  changeUserNumber("");
  show(inputContainerNode);
  show(startBtnNode);
}

function chekUserNumber(userNumber) {
  if (userNumber < 1) {
    changeUserNumber(1);
    changeInfoText(`You can't input "0" or negative number!`);
    setTextColor("red", infoNode);
    return;
  } else if (userNumber > 100) {
    changeUserNumber(100);
    changeInfoText(`you cannot enter a number greater than 100`);
    setTextColor("red", infoNode);
    return;
  } else if (randomNumber == userNumber) {
    changeInfoText("Congratulations!!! Yuo win!");
    setTextColor("green", infoNode);
    return;
  } else {
    changeInfoText(`You didn't guess :( It's ${randomNumber}`);
    setTextColor("red", infoNode);
    return;
  }
}

startBtnNode.addEventListener("click", (e) => {
  chekUserNumber(inputNumberNode.value);
  hide(startBtnNode);
  hide(inputContainerNode);
  setTimeout(restart, 2000);
});

restart();
changeInfoText("Input number");
