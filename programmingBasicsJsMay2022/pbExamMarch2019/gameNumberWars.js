function gameNumberWars(input) {
    let index = 0
    let name1 = input[index];
    index++;
    let name2 = input[index];
    index++;
    let end = '';
    let sum1 = 0;
    let sum2 = 0;
    let a = 0;
    
    while (end !== 'End of game') {
        let card1 = Number(input[index]);
        index++;
        let card2 = Number(input[index]);
        index++;
        end = input[index];

        if (card1 > card2) {
            let result1 = card1 - card2;
            sum1 += result1;
        } else if (card2 > card1) {
            let result2 = card2 - card1;
            sum2 += result2;
        } else if (card1 === card2) {
            console.log(`Number wars!`);
            card1 = Number(input[index]);
            index++;
            card2 = Number(input[index]);
            a++;
            if (card1 > card2) {
                console.log(`${name1} is winner with ${sum1} points`);
                break;
            } else if (card2 > card1) {
                console.log(`${name2} is winner with ${sum2} points`);
                break;
            }

        }

    }
    if (a === 0) {
        console.log(`${name1} has ${sum1} points`);
        console.log(`${name2} has ${sum2} points`);
    }
}
gameNumberWars(["Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"])