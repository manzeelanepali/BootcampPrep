// YOUR CODE BELOW
function myJoin(array, separator) {
  debugger;
  separator = separator || ",";
  let string = "";

  for (let i = 0; i < array.length; i++) {
    let curVal = array[i];
    if (curVal === null || curVal === undefined) {
      curVal = "";
    }
    string = string + curVal;
    //string = string + curVal + separator;

    if (i !== array.length - 1) {
      /// this logic add separtor in the string which is not equal to last index
      string = string + separator;
    }
  }
  //string = string.slice(0, -1);
  return string;
}
