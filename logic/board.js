class Board {
  constructor() {
    this.grid = [
      ["", " ", " "],
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
      console.log("trueeee we won");
      return true;
    }
    console.log("not done");
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
