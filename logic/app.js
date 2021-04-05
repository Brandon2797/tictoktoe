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

const game = new Game(player1, player2);

game.start();
