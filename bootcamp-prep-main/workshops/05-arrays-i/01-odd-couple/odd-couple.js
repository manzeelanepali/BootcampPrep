// YOUR CODE BELOW

function oddCouple(arr) {
  const odds = arr.filter((num) => num % 2 !== 0);
  return odds.slice(0, 2);
}
