function degustationParty(input) {
    const infoMeals = {};
    let unlikedMeals = 0;

    let currentLine = input.shift();
    while (currentLine !== 'Stop') {
        const [command, guest, meal] = currentLine.split('-');

        switch (command) {
            case 'Like':
                if (!infoMeals[guest]) {
                    infoMeals[guest] = []
                }
                if (!infoMeals[guest].includes(meal)) {
                    infoMeals[guest].push(meal);
                }

                break;

            case 'Dislike':
                if (!infoMeals[guest]) {
                    console.log(`${guest} is not at the party.`);
                } else {
                    if (!infoMeals[guest].includes(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    } else {
                        const index = infoMeals[guest].indexOf(meal);
                        infoMeals[guest].splice(index, 1);
                        unlikedMeals++;
                        console.log(`${guest} doesn't like the ${meal}.`);
                    }
                }

                break;
        }

        currentLine = input.shift();
    }

    for (const guest in infoMeals) {

        console.log(`${guest}: ${infoMeals[guest].join(', ')}`);
    }

    console.log(`Unliked meals: ${unlikedMeals}`);

}

degustationParty(['Like-Krisi-shrimps', 'Like-Krisi-soup', 'Like-Penelope-dessert', 'Like-Misho-salad', 'Stop']);