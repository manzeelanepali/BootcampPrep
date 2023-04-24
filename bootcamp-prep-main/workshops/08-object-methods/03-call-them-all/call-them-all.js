// YOUR CODE BELOW
function callThemAll(obj, value) {
  let results = [];

  // Iterate over all properties of the object
  for (let prop in obj) {
    // Check if the property is a function
    if (typeof obj[prop] === "function") {
      // Call the function with the given value as argument
      results.push(obj[prop](value));
    }
  }

  return results;
}
