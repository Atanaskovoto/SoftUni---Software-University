function wordsTracker(input) {
    let words = {};

    let givenWords = input
        .shift()
        .split(' ');

    for (const word of givenWords) {
        words[word] = 0;
    }

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }

    let ArrayOfWords = Object.entries(words);
    ArrayOfWords.sort((a, b) => b[1] - a[1]);

    for (const info of ArrayOfWords) {
        console.log(info.join(' - '));
    }
}

wordsTracker([

    'is the',

    'first', 'sentence', 'Here', 'is',

    'another', 'the', 'And', 'finally', 'the',

    'the', 'sentence']);