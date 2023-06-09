let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW

function petSounds(animalName, countryName) {
  debugger;
  let result = "";
  let newObj = {};
  for (let i = 0; i < animalNoises.length; i++) {
    let curVal = animalNoises[i];
    for (let key in curVal) {
      newObj[key] = curVal[key];
    }
  }
  let currAnimal = animalName[0].toUpperCase() + animalName.slice(1) + "s";
  //animal[0] give D only and animalName.slice[1] add og and add s later
  result = `${currAnimal} in ${countryName} say ${newObj[animalName][countryName]}`;

  return result;
}
