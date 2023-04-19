// YOUR CODE BELOW

function oddCouple(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    if (curVal % 2 !== 0) {
      res.push(curVal);
    }
  }
  let finalRes = res.slice(0, 2);
  return finalRes;
}
