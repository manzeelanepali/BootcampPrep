// YOUR CODE BELOW

function bacteriaTime(currentNum, targetNum) {
  if (targetNum <= currentNum) {
    return "targetNum must be larger than currentNum";
  }

  const doublingTime = 20; // in minutes
  let timeElapsed = 0;

  while (currentNum < targetNum) {
    currentNum *= 2;
    timeElapsed += doublingTime;
  }

  return timeElapsed;
}
