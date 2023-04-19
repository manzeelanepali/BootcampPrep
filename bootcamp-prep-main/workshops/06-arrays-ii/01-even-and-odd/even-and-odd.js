// YOUR CODE BELOW

function evenAndOdd(array) {
  let oddNum = [];
  let evenNum = [];

  let finalRes = [evenNum, oddNum];
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal % 2 === 0) {
      evenNum.push(currVal);
    } else {
      oddNum.push(currVal);
    }
  }
  return finalRes;
}
