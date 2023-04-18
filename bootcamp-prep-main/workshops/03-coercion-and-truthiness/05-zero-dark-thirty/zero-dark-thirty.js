// YOUR CODE BELOW
function zeroDarkThirty(number) {
  if (number == 0) {
    return NaN;
  }
  let newStr = number.toString();
  let finalRes = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== "0") {
      finalRes += newStr[i];
    }
  }
  let convertToNum = Number(finalRes);
  return convertToNum;
}
