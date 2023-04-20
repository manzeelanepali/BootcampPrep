// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  debugger;
  //let newArray = [];
  const copyArray = originalArray.slice(); // create a copy of the original array

  if (rotateNum > 0) {
    // rotate to the right
    for (let i = 0; i < rotateNum; i++) {
      //pop method sliced last element from the copyArray
      copyArray.unshift(copyArray.pop()); //unshift add the last sliced element to the front  in the copyArray
    }
  } else if (rotateNum < 0) {
    // rotate to the left
    for (let i = 0; i < Math.abs(rotateNum); i++) {
      copyArray.push(copyArray.shift()); //shift method remove the element from the zero index and push add that removed element from behind
    }
  }

  return copyArray;
}
