 function rockAnd() {
  let Number = Math.random();
  let PcMove = "";

  if (Number >= 0 && Number < 1 / 3) {
    PcMove = "Rock";
  } else if (Number >= 1 / 3 && Number < 2 / 3) {
    PcMove = "Paper";
  } else if (Number >= 2 / 3 && Number < 1) {
    PcMove = "Scissor";
  }

  let result = "";

  if (PcMove === "Rock") {
    result = "Tie";
  } else if (PcMove === "Paper") {
    result = "You Lose";
  } else if (PcMove === "Scissor") {
    result = "You Win";
  }

  document.getElementById("results").innerHTML =(`Your Move:  Rock.\t Computer Move: ${PcMove}.\n Result: ${result}`);
}
function PaperAnd() {
  let Number = Math.random();
  let PcMove = "";

  if (Number >= 0 && Number < 1 / 3) {
    PcMove = "Rock";
  } else if (Number >= 1 / 3 && Number < 2 / 3) {
    PcMove = "Paper";
  } else if (Number >= 2 / 3 && Number < 1) {
    PcMove = "Scissor";
  }

  let result = "";

  if (PcMove === "Rock") {
    result = "You Win.";
  } else if (PcMove === "Paper") {
    result = "Tie.";
  } else if (PcMove === "Scissor") {
    result = "You Lose.";
  }

  document.getElementById("results").innerHTML =(`Your Move:  Paper.\t Computer Move: ${PcMove}.\nResult: ${result}`);
}
function ScissorAnd() {
  let Number = Math.random();
  let PcMove = "";

  if (Number >= 0 && Number < 1 / 3) {
    PcMove = "Rock";
  } else if (Number >= 1 / 3 && Number < 2 / 3) {
    PcMove = "Paper";
  } else if (Number >= 2 / 3 && Number < 1) {
    PcMove = "Scissor";
  }

  let result = "";

  if (PcMove === "Rock") {
    result = "You Win";
  } else if (PcMove === "Paper") {
    result = "You Lose";
  } else if (PcMove === "Scissor") {
    result = "Tie.";
  }

  document.getElementById("results").innerHTML =(`Your Move:  Scissor. Computer Move: ${PcMove}. Result: ${result}`);
}
var typed = new Typed(".heading",{
  strings:['','Welcome to the Rock Paper Scissor game.'],
  typespeed:100,
  backspeed:100,
  backDelay:1000,
  loop:false
})
