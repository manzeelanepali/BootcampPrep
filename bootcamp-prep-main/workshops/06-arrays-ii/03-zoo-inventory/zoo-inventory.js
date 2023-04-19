// YOUR CODE BELOW
function zooInventory(array) {
  //   function zooInventory(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let animal = array[i][0];
    let type = array[i][1][0];
    let age = array[i][1][1];
    let str = `${animal} the ${type} is ${age}.`;
    result.push(str);
  }
  return result;
}

console.log(
  zooInventory([
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]],
  ])
);
