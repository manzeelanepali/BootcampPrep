// YOUR CODE BELOW
let ticTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  move: function (char, row, col) {
    if (this.board[row][col] === null) {
      this.board[row][col] = char;
    }
    console.log(this.board);
    return this.board;
  },

  clear: function () {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.log(this.board);
    return this.board;
  },
};
