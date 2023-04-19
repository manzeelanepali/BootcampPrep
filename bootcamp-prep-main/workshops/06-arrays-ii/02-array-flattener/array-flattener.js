// YOUR CODE BELOW
function arrayFlattener(array) {
  let newArray = [];
  debugger;
  for (let i = 0; i < array.length; i++) {
    let curVal = array[i];
    if (Array.isArray(curVal)) {
      for (let j = 0; j < curVal.length; j++) {
        let num = curVal[j];
        newArray.push(num);
      }
    } else newArray.push(curVal);
  }
  return newArray;
}

console.log(arrayFlattener([1, [2, 3], 4]));
