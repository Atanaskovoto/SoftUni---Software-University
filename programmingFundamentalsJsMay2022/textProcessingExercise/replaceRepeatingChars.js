function replaceRepeatingChars(string) {
    const arrayOfChar = string.split('');
    const test = [];

    let currentChar = arrayOfChar[0];
    test.push(currentChar);
    for (let index = 1; index < arrayOfChar.length; index++) {
        const element = arrayOfChar[index];
        if (currentChar !== element) {
            currentChar = element;
            test.push(currentChar);
        }
    }
    console.log(test.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');