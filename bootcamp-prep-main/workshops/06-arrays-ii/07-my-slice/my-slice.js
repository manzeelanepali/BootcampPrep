// YOUR CODE BELOW
function mySlice(orginalArray, startIdx, endIdx) {
  debugger;
  let newArray = [];

  const arrayLength = orginalArray.length;

  if (startIdx === undefined) {
    startIdx = 0;
  } else if (startIdx < 0) {
    startIdx = arrayLength + startIdx;
  }

  if (endIdx === undefined) {
    endIdx = arrayLength;
  } else if (endIdx < 0) {
    endIdx = arrayLength + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    newArray.push(orginalArray[i]);
  }
  return newArray;
}
