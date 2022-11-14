function oddOccurrences(input) {
    const arrayOfElements = input
        .toLowerCase()
        .split(' ');

    const elemenstCount = {};

    for (const element of arrayOfElements) {
        if (!elemenstCount[element]) {
            elemenstCount[element] = 0;
        }

        elemenstCount[element] += 1;
    }

    const result = [];

    for (const key in elemenstCount) {
        if (elemenstCount[key] % 2 !== 0) {
            result.push(key);
        }
    }

    console.log(result.join(' '));
}

oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')