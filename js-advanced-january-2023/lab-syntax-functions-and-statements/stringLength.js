function stringLength(strinOne, stringTwo, stringThree) {
const allStrings = strinOne + stringTwo + stringThree;
const averageLength = allStrings.length / 3;

console.log(`${allStrings.length}\n${Math.floor(averageLength)}`);
}

stringLength('pasta', '5', '22.3');
stringLength('chocolate', 'ice cream', 'cake');