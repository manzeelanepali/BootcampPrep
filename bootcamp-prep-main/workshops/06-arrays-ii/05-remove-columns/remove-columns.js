// YOUR CODE BELOW
function removeColumns(originalGrid, column) {
  debugger;
  let grid = [];
  for (let i = 0; i < originalGrid.length; i++) {
    let curVal = originalGrid[i];
    if (Array.isArray(curVal)) {
      grid.push(curVal.slice(0, curVal.length - column));
    }
  }

  return grid;
}
console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2
  )
);
