// YOUR CODE BELOW
function cloneMachine(animal) {
  let clone = Object.assign({}, animal);
  clone.name = animal.name + "Clone";
  clone.offspring = [];
  animal.offspring.push(clone.name);
  return clone;
}
