function lowerOrUpper(character) {
    let currentChar = character.toUpperCase();

    if (currentChar === character) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerOrUpper('l');