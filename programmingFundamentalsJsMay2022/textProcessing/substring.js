function substring(string, startingIndex, count) {
    let result = string.substring(startingIndex, count + startingIndex);
    console.log(result);
}

substring('ASentance', 1, 8);