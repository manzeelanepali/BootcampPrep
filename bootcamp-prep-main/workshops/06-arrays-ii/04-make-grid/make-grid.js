// YOUR CODE BELOW
function makeGrid(column, row) {
  debugger;
  let grid = [];
  for (let i = 0; i < row; i++) {
    let row = [];
    for (let j = 0; j < column; j++) {
      row.push(j + 1);
    }
    grid.push(row);
  }
  return grid;
}

// console.log(makeGrid(3, 4));
