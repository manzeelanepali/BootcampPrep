// YOUR CODE BELOW

function maxOfThree(one, two, three) {
  if (one > two && one > three) {
    return one;
  } else if (two > one && two > three) {
    return two;
  } else {
    return three;
  }
}
console.log(maxOfThree(10, 12, 14));
