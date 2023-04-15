// YOUR CODE BELOW

function taxCalculator(price, state) {
  if (state === "NY") {
    taxRate = 0.04;
  } else if (state === "NJ") {
    taxRate = 0.06625;
  }
  const afterTax = price + price * taxRate;
  return afterTax;
}
