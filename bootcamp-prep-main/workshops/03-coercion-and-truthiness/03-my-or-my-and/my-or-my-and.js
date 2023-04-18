function myOr(first, second, third) {
  if (first || second || third) {
    return first || second || third;
  } else {
    if (!first || second || third) {
      return third;
    }
  }
}

function myAnd(one, two, three) {
  if (one && two && !three) return;
}
