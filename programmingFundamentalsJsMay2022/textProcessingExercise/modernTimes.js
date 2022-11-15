function modernTimes(string) {
    const arrayOfWords = string.split(' ');

    let specialWords = '';
    for (const word of arrayOfWords) {
        if (word.includes('#')) {
            specialWords = specialWords.concat(word);
        }
    }
    const result = specialWords.split('#');

    for (const el of result) {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            console.log(el);
        } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
            console.log(el);
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')