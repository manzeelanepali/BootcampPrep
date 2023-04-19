// YOUR CODE BELOW
function myReverse(array) {
  let finalArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let curVal = array[i];
    finalArr.push(curVal);
  }
  return finalArr;
}
