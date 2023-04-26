// YOUR CODE BELOW
function mySplice(array, startIndex, deleteCount, ...elementsToAdd) {
  // Create a new array to store the removed elements
  const removedElements = [];

  // Handle negative start index
  if (startIndex < 0) {
    startIndex = array.length + startIndex;
    if (startIndex < 0) {
      startIndex = 0;
    }
  }

  // Handle delete count greater than remaining elements
  if (deleteCount > array.length - startIndex) {
    deleteCount = array.length - startIndex;
  }

  // Remove the elements to be deleted and store them in the removedElements array
  for (let i = 0; i < deleteCount; i++) {
    removedElements.push(array[startIndex + i]);
  }

  // Shift the remaining elements to the left or right, depending on whether we are adding or deleting elements
  const numElementsToAdd = elementsToAdd.length;
  const numElementsToRemove = removedElements.length;
  const numRemainingElements = array.length - numElementsToRemove;

  if (numElementsToAdd > numElementsToRemove) {
    for (let i = numRemainingElements - 1; i >= startIndex; i--) {
      array[i + numElementsToAdd - numElementsToRemove] = array[i];
    }
  } else if (numElementsToAdd < numElementsToRemove) {
    for (let i = startIndex + numElementsToRemove; i < array.length; i++) {
      array[i - numElementsToRemove + numElementsToAdd] = array[i];
    }
    array.length -= numElementsToRemove - numElementsToAdd;
  }

  // Add the new elements to the array
  for (let i = 0; i < numElementsToAdd; i++) {
    array[startIndex + i] = elementsToAdd[i];
  }

  // Return the removed elements
  return removedElements;
}
