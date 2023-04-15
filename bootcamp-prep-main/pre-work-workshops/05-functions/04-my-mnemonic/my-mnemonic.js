// YOUR CODE BELOW
function myMnemonic(...strings) {
  let mnemonic = "";
  for (let i = 0; i < strings.length && mnemonic.length < 4; i++) {
    mnemonic = mnemonic + strings[i][0];
  }
  return mnemonic.toUpperCase();
}

console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness"));
