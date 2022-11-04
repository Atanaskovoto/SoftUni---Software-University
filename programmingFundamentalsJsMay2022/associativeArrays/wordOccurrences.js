function wordOccurrences(input) {
    let listOfWords = {};

    for (const word of input) {
        if (!listOfWords.hasOwnProperty(word)) {
            listOfWords[word] = 1;
        } else {
            listOfWords[word] += 1;
        }
    }

    const ArrayOfWords = Object.entries(listOfWords).sort((a, b) => b[1] - a[1])
    for (const [word, count] of ArrayOfWords) {
        console.log(`${word} -> ${count} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])