function rightPlace(str1, char, str2) {
    let replace = '';

    for (let i = 0; i < str1.length; i++) {
        let currentChar = str1[i];
        switch (currentChar) {
            case '_': currentChar = char; break;
        }
        replace += currentChar;
    }
    if (replace === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String')