// YOUR CODE BELOW
// function veryOddMutant (array ){
//     let finalResult = []
// for (let i=0;i<array.length; i++){
//     let currVal = array[i]
//     if (currVal%2===0){

//     }
// }

// return finalResult;
// }
// console.log(veryOddMutant([1,2,3,4,5,6,7,8,9,10]))
function veryOddMutant(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = "normie";
      count++;
    }
  }
  return count;
}
console.log(veryOddMutant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
