// YOUR CODE BELOW
function veryOdd(array) {
  let oddNum = [];

  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal % 2 !== 0) {
      oddNum.push(currVal);
    }
  }

  return oddNum;
}

console.log(veryOdd([1, 2, 3, 4, 5, 6, 7, 8]));
