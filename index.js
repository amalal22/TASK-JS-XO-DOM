// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
//fillButton(1, "X");
//fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let turn = "x";
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  // Your main code here.
  if (turn == "x" && document.getElementById(index).innerHTML == "") {
    fillButton(index, "x");
    checkWinner();
    turn = "o";
  } else if (turn == "o" && document.getElementById(index).innerHTML == "") {
    fillButton(index, "o");
    checkWinner();
    turn = "x";
  }
}

function checkWinner() {
  const b1 = document.getElementById(1).innerHTML;
  const b2 = document.getElementById(2).innerHTML;
  const b3 = document.getElementById(3).innerHTML;
  const b4 = document.getElementById(4).innerHTML;
  const b5 = document.getElementById(5).innerHTML;
  const b6 = document.getElementById(6).innerHTML;
  const b7 = document.getElementById(7).innerHTML;
  const b8 = document.getElementById(8).innerHTML;
  const b9 = document.getElementById(9).innerHTML;
  if (
    (b1 == b4 && b1 == b7 && b1 != "") ||
    (b2 == b5 && b2 == b8 && b2 != "") ||
    (b3 == b6 && b3 == b9 && b3 != "") ||
    (b1 == b5 && b1 == b9 && b1 != "") ||
    (b3 == b5 && b3 == b7 && b3 != "") ||
    (b1 == b2 && b1 == b3 && b1 != "") ||
    (b5 == b4 && b5 == b6 && b5 != "") ||
    (b7 == b8 && b9 == b7 && b7 != "")
  ) {
    winningAlert(turn);
    restartGame();
  } else if (
    b1 != "" &&
    b2 != "" &&
    b3 != "" &&
    b4 != "" &&
    b5 != "" &&
    b6 != "" &&
    b7 != "" &&
    b8 != "" &&
    b9 != ""
  ) {
    alert(`Game Over`);

    restartGame();
  }
  console.log("checking the winner");
}

function restartGame() {
  const b1 = (document.getElementById(1).innerHTML = "");
  const b2 = (document.getElementById(2).innerHTML = "");
  const b3 = (document.getElementById(3).innerHTML = "");
  const b4 = (document.getElementById(4).innerHTML = "");
  const b5 = (document.getElementById(5).innerHTML = "");
  const b6 = (document.getElementById(6).innerHTML = "");
  const b7 = (document.getElementById(7).innerHTML = "");
  const b8 = (document.getElementById(8).innerHTML = "");
  const b9 = (document.getElementById(9).innerHTML = "");
  console.log("resting");
}
