// YOUR CODE BELOW
function myIncludes(array, searchValue) {
  for (let i = 0; i < array.length; i++) {
    let currVal = array[i];
    if (currVal === searchValue) {
      return true;
    }
  }
  return false;
}
