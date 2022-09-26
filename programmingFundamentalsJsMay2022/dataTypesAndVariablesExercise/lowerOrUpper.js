function lowerOrUpper(character) {
    let currentChar = character.toUpperCase();

    if (currentChar === character) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

//     Another solution:

//     let currentChar = character.toLowerCase()

//    let typeOfChar = character === currentChar ? 'lower-case' : 'upper-case';

//    console.log(typeOfChar);
}
lowerOrUpper('l');