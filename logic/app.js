let player1Name = window.prompt("What's Your Name Player 1");
console.log(player1Name);


let player2Name = window.prompt("What's Your Name Player 2");
console.log(player2Name);

if (player1Name != null) {
  document.getElementById("greet").innerHTML =
    "Hello" + " " + player1Name + " " + "! Ready to play?";
}
 if (player2Name != null) {
  document.getElementById("greet2").innerHTML =
    "Hello" + " " + player2Name + " " + "! Ready to play?";
}
const player1 = { name: player1Name, symbol: "X" };
const player2 = { name: player2Name, symbol: "O" };

function cords00(e) {
     let cords = document.getElementsByClassName("cords00");
     for (let i = 0; i < cords.length; i++) {
       cords[i].innerHTML = 'x'
     }
  
}
function cords01(e) {
  let cords = document.getElementsByClassName("cords01");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}
function cords02(e) {
  let cords = document.getElementsByClassName("cords02");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}

function cords10(e) {
  let cords = document.getElementsByClassName("cords10");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}
function cords11(e) {
  let cords = document.getElementsByClassName("cords11");
  for (let i = 0; i < cords.length; i++) {
      
        cords[i].innerHTML = "x";
      console.log(cords[i]);
     
  }
}
function cords12(e) {
  let cords = document.getElementsByClassName("cords12");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}

function cords20(e) {
  let cords = document.getElementsByClassName("cords20");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}
function cords21(e) {
  let cords = document.getElementsByClassName("cords21");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}
function cords22(e) {
  let cords = document.getElementsByClassName("cords22");
  for (let i = 0; i < cords.length; i++) {
    cords[i].innerHTML = "x";
  }
}
const game = new Game(player1, player2);

game.start();
