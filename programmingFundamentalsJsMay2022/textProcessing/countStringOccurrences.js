function countStringOccurrences(text, word) {
    const arrayOfText = text.split(' ');

    let countWord = 0;

    for (const el of arrayOfText) {
        if (el == word) {
            countWord++;
        }
    }

    console.log(countWord);
}

countStringOccurrences('This is a word and it also is a sentence',

    'is');