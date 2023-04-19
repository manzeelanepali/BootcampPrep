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

function myAnd(first, second, third) {
  if (first && second && third) {
    return third;
  } else {
    if (!first) {
      return first;
    } else if (!second) {
      return second;
    } else {
      return third;
    }
  }
}
