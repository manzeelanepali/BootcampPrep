// YOUR CODE BELOW
function exponentiate(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;
  }
  return result;
}
