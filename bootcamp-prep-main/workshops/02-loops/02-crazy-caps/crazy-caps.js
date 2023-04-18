// YOUR CODE BELOW

function crazyCaps(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let currVal = string[i];
    if (i % 2 === 0) {
      result += currVal.toLowerCase();
    } else {
      result += currVal.toUpperCase();
    }
  }
  return result;
}
console.log(crazyCaps(" tej is amazing"));
