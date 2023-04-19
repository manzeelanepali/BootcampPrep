// YOUR CODE BELOW

//  unshift built-in method pushes the value in front

function myUnshift(arr, value) {
  const newArr = [value];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
