class Player {
  constructor(name = "player", symbol) {
    this.name = name;
    this.symbol = symbol;
  }
}

class Board {
  constructor() {
    this.grid = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
  }

  placeSymbol(x, y, symbol) {
    this.grid[x][y] = symbol;
  }

  printGrid() {
    let stringyGrid = "";

    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      const strigyRow = row.toString();
      stringyGrid += strigyRow;
      stringyGrid += "\n";
    }
    console.log(stringyGrid);
  }
}

const game = new Board();

game.placeSymbol(0, 1, "X");
game.printGrid();
// console.log(stringyGrid);
