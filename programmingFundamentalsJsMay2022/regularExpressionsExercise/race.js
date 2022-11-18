function race(input) {
    const patternName = /[A-Za-z]+/g;
    const patternDistance = /\d/g;

    const result = {};

    const participants = input
        .shift()
        .split(', ');

    let index = 0
    while (input[index] !== 'end of race') {

        let arrayOfName = input[index].match(patternName);
        let arrayOfDistance = input[index].match(patternDistance);

        let allDistance = 0;

        for (const el of arrayOfDistance) {
            allDistance += Number(el);
        }

        let name = arrayOfName.join('')
        let distance = allDistance;

        if (participants.includes(name)) {
            if (!result.hasOwnProperty(name)) {
                result[name] = 0;
            }
            result[name] += distance;

        }

        index++;
    }

    const finaleResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${finaleResult[0][0]}`);
    console.log(`2nd place: ${finaleResult[1][0]}`);
    console.log(`3rd place: ${finaleResult[2][0]}`);
    
    // for (let i = 0; i < 3; i++) {
    //     let [name, distance] = finaleResult[i];
    //     console.log(`${i + 1} place: ${name}`);
    // }
}

race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@ ', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']);