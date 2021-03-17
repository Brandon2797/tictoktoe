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

      //create new line after row
      stringyGrid += "\n";
    }
    console.log(stringyGrid);
  }

  checkWin(symbol) {
    if (
      this.checkRow(symbol) ||
      this.checkCol(symbol) ||
      this.checkDiagonal(symbol)
    ) {
      return true;
    }

    return false;
  }

  checkRow(symbol) {
    for (let i = 0; i < this.grid.length; i++) {
      const row = this.grid[i];
      let count = 0;
      for (let j = 0; j < row.length; j++) {
        const el = row[j];
        if (el === symbol) {
          count += 1;
        }
      }
      if (count === 3) {
        return true;
      } else {
        count = 0;
      }
    }
  }

  checkCol(symbol) {
    let x = 0;

    while (x < 3) {
      let count = 0;

      for (let y = 0; y < 3; y++) {
        const el = this.grid[y][x];
        if (el === symbol) {
          count += 1;
        }
      }
      if (count === 3) {
        return true;
      } else {
        count = 0;
      }
      x += 1;
    }
    return false;
  }

  checkDiagonal(symbol) {
    let count = 0;

    for (let i = 0; i < 3; i++) {
      const el = this.grid[i][i];

      if (el == symbol) {
        count += 1;
      }
    }
    if (count === 3) {
      return true;
    } else {
      count = 0;
    }
    let x = 2;

    for (let y = 0; y < 3; y++) {
      const el = this.grid[y][x];
      if (el == symbol) {
        count += 1;
      }
      x -= 1;
    }
    if (count === 3) {
      return true;
    }

    return false;
  }
}

class Player {
  constructor(name = "player", symbol) {
    this.name = name;
    this.symbol = symbol;
  }

  test() {
    console.log("this is a test");
  }
}

class Game extends Board {
  constructor(player1, player2) {
    super();
    this.player1 = new Player(player1.name, player1.symbol);
    this.player2 = new Player(player2.name, player2.symbol);
  }
  playGame() {
    // while (this.checkWin()) {}

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`What's your name?`, (name) => {
      console.log(`Hi ${name}!`);
      readline.close();
    });
  }
}
console.log("test commit");
const player1 = { name: "Bob", symbol: "X" };
const player2 = { name: "ToD", symbol: "O" };

const game = new Game(player1, player2);

console.log(game.playGame());
