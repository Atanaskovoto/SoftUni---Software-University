function censoredWords(text, word) {
    const indexOfWord = text.indexOf(word);
    let test = text.replace(word, '*'.repeat(word.length));
    while (test.includes(word)) {
        test = test.replace(word, '*'.repeat(word.length));
    }

    console.log(test);
}
censoredWords('A small sentence with some small words', 'small');