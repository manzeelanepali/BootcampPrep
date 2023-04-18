// YOUR CODE BELOW
function justInCamelCase(undername) {
  debugger;
  let camelCaseOutput = "";
  let foundUnder = false;
  for (let i = 0; i < undername.length; i++) {
    if (undername[i] === "_") {
      foundUnder = true;
    } else {
      if (foundUnder) {
        camelCaseOutput += undername[i].toUpperCase();
        foundUnder = false;
      } else {
        camelCaseOutput += undername[i];
      }
    }
  }
  return camelCaseOutput;
}

console.log(justInCamelCase("ani_it_it"));
