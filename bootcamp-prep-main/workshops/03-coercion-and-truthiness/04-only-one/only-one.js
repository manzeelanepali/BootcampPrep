// YOUR CODE BELOW
// function onlyOne(one, two, three) {
//   return Boolean(one || two || three);
// }

// function onlyOne(arg1, arg2, arg3) {
//   return Boolean(arg1) ^ Boolean(arg2) ^ Boolean(arg3);
// }

function onlyOne(one, two, three) {
  debugger;

  if (
    (!one && !two && three) || ///niru ko code
    (!one && two && !three) ||
    (one && !two && !three)
  ) {
    return true;
  } else return false;
}
