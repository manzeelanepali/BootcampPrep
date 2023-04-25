// YOUR CODE BELOW
function cloneMachine(animal) {
  debugger;
  //  The Object.assign method is used to create a shallow copy of the animal object and assign it to a clone variable.
  let clone = Object.assign({}, animal);
  //   The name of the clone is set to the name of the original animal, concatenated with the word 'Clone'.
  clone.name = animal.name + "Clone";
  //   The offspring property of the clone is set to an empty array.
  clone.offspring = [];
  animal.offspring.push(clone.name);
  //   The name of the clone is pushed to the offspring array of the original animal.
  return clone;
}

console.log(
  cloneMachine({
    name: "Dolly",
    species: "sheep",
    offspring: [],
  })
);
