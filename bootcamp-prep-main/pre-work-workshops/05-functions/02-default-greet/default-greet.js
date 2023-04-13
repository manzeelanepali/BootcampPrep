// YOUR CODE BELOW
function defaultGreet(first, lastname) {
  if (first && lastname) {
    return `Hi ${first} ${lastname}!`;
  } else {
    return `Hi ${first} Doe!`;
  }
}

console.log(defaultGreet(Natalie, Cole));
// console.log(defaultGreet(john));
