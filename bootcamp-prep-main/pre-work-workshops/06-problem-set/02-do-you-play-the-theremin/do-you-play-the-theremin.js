// // YOUR CODE BELOW
// function doYouPlayTheTheremin(name) {
//   for (let i = 0; i < name.length; i++) {
//     let currVal = name[i][0];
//     if (currVal === "S" || "s") {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// function doYouPlayTheTheremin(name) {
//   return name.charAt(0) === "s" || name.charAt(0) === "S";
// }

function doYouPlayTheTheremin(name) {
  if (name.charAt(0) === "S" || name.charAt(0) === "s") {
    return true;
  } else {
    return false;
  }
}
console.log(doYouPlayTheTheremin("Ram"));
