function charactersInRange(charOne, charTwo) {
    let startNumber = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let endNumber = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let charsInArray = [];
    for (let currentNumber = startNumber + 1; currentNumber < endNumber; currentNumber++) {
        let currentChar = String.fromCharCode(currentNumber);
        charsInArray.push(currentChar);
    }
    console.log(charsInArray.join(' '));
}
charactersInRange('c', '#')