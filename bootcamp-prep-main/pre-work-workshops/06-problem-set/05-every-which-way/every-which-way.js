// // YOUR CODE BELOW
// function everyWhichWay(one, two, three) {
//   if (one + two === three) {
//     return sum;
//   } else if (one - two === three) {
//     return difference;
//   } else if (one * two === three) {
//     return product;
//   } else if (one / two === three) {
//     return fraction;
//   } else {
//     return null;
//   }
// }
// console.log(everyWhichWay(10, 20, 30));

function everyWhichWay(one, two, three) {
  if (one + two === three) {
    return "sum";
  } else if (one - two === three) {
    return "difference";
  } else if (one * two === three) {
    return "product";
  } else if (one / two === three) {
    return "fraction";
  } else {
    return null;
  }
}

console.log(everyWhichWay(10, 10, 20));
