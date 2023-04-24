function lastFridayNight(transactions) {
  let totalAmount = 0;
  for (let i = 0; i < transactions.length; i++) {
    totalAmount = totalAmount + transactions[i].amount;
  }
  return totalAmount;
}
