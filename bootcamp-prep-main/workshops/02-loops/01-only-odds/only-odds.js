// YOUR CODE BELOW
function onlyOdds(numbers) {
  let num = 0;

  for (let i = 1; i <= numbers; i++) {
    if (i % 2 === 1) {
      num += i;
    }
  }
  return num;
}
