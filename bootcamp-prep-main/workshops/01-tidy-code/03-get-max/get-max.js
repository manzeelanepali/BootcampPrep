// YOUR CODE BELOW
// function getMax(f, s, a) {
//   if (f > s) {
//     if (f > a) {
//       return f;
//     }
//     return a;
//   } else if (s > a) {
//     return s;
//   } else {
//     return a;
//   }
// }

// function getMax(first, second, third) {
//   if (first > second > third) {
//     return first;
//   } else if (second > third > first) {
//     return second;
//   } else {
//     return third;
//   }
// }
// console.log(getMax(20, 60, 40));

function getMax(num1, num2, num3) {
  debugger;
  let greatestNum = num1;
  if (num2 > greatestNum) {
    greatestNum = num2;
  }
  if (num3 > greatestNum) {
    greatestNum = num3;
  }
  return greatestNum;
}

console.log(getMax(3, 8, 9));
