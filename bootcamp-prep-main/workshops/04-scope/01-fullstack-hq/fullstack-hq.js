// Edit the code below
let place = "Planet Earth";

function fullstackHQ() {
  return middleFunction("United States");

  function middleFunction(secondPlace) {
    return innerFunction("New York State");

    function innerFunction(thirdPlace) {
      //place = "New York City";
      return innermostFunction("New York City");

      function innermostFunction(fourthPlace) {
        //let fourthPlace = "New York City";
        return (
          "Fullstack HQ is at " +
          place +
          ", " +
          secondPlace +
          ", " +
          thirdPlace +
          ", " +
          fourthPlace
        );
      }
    }
  }
}

console.log(fullstackHQ());
