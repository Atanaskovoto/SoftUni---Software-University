function revealWords(words, string) {
    const arrayOfWords = words.split(', ');

    for (const word of arrayOfWords) {

        let wordToReplace = '*'.repeat(word.length);

        string = string.replace(wordToReplace, word);

    }

    console.log(string);
}

revealWords('great, learning',

    'softuni is ***** place for ******** new programming languages')