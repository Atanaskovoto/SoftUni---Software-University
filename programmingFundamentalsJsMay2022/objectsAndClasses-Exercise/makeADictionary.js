function makeADictionary(input) {
  let allTerms = [];
  input.forEach(term => {
    allTerms.push(Object.entries(JSON.parse(term)));
  });

  let toString = [];
  allTerms.forEach(string => {
    toString.push(string.join(''));
  });

  toString.sort((a, b) => (a).localeCompare(b));

  let rezult = [];
  toString.forEach(string => {
    rezult.push(string.split(','));
  });

  for (let i = 0; i < rezult.length; i++) {
    let currentTerm = (rezult[i])[i];
    for (let s = i + 1; s < rezult.length; s++) {
      if (rezult[s].includes(currentTerm)) {
        rezult.splice(s, 1);
      }
    }
  }
  rezult.forEach(term => {
    console.log(`Term: ${term.shift()} => Definition: ${term}`);
  });
}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and groundseeds(coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])