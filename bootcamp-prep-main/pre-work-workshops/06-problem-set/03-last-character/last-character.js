// YOUR CODE BELOW
function lastCharacter(str1, str2) {
  if (str1.slice(-1) === str2.slice(-1)) {
    // slice(-1 for acessing the last element in the string and string(-2 for acessing the second last elemen in the string))
    return true;
  } else {
    return false;
  }
}
console.log(lastCharacter("Rams", "sams"));
