class Game extends Board {
  constructor(player1, player2) {
    super();
    this.player1 = new Player(player1.name, player1.symbol);
    this.player2 = new Player(player2.name, player2.symbol);
    this.currentPlayer = this.player1.name;
  }
  switchTurns() {
    if (this.currentPlayer === this.player1.name) {
      this.currentPlayer = this.player2.name;
      let cord = window.prompt(
        `${this.player1.name} what is your coordinates?`
      );
      console.log(cord);

      let x = cord[0];
      let y = cord[1];
      let symbol = this.player1.symbol;
      this.placeSymbol(x, y, symbol);
      this.printGrid();
    } else {
      this.currentPlayer = this.player1.name;
      let cord = window.prompt(
        `${this.player2.name} what is your coordinates?`
      );
      console.log(cord);

      let x = cord[0];
      let y = cord[1];
      let symbol = this.player2.symbol;
      this.placeSymbol(x, y, symbol);
      this.printGrid();
    }
  }
  start() {
    let done = false;
    while (!done) {
      this.switchTurns();
      if (this.checkWin(this.player1.symbol)) {
        done = true;
        console.log(this.player1.name + " you won");
      } else if (this.checkWin(this.player2.symbol)) {
        console.log(this.player2.name + " you won");
      }
    }
  }
}
