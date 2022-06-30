function easterCompetition(input) {
    let index = 0;
    let command = input[index];
    let cakeCount = Number(input[index++]);
    let chefName = input[index++];
    let winerPoints = 0;
    let winerName = '';

    for (let i = 0; i < cakeCount; i++) {
        let points = 0;

        while (command !== 'Stop') {
            let currentPoints = Number(input[index++]);
            points += currentPoints;
            command = input[index];
        }

        console.log(`${chefName} has ${points} points.`)
        if (winerPoints < points) {
            winerPoints = points;
            console.log(`${chefName} is the new number 1!`);
            winerName = chefName;
        }
        chefName = input[++index];
        command = input[index++];
    }
    console.log(`${winerName} won competition with ${winerPoints} points!`);
}
easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

