function pascalCaseSplitter(string) {
    const result = [];
    let start = 0
    for (let i = 1; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            let index = i;
            let word = string.substring(start, i);
            start = i;
            result.push(word);
        }
    }

    result.push(string.substring(start));
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');