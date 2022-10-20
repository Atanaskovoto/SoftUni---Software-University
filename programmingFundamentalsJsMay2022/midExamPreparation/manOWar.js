function manOWar(input) {
    let pirateShip = input
        .shift()
        .split('>')
        .map(Number);

    let warship = input
        .shift()
        .split('>')
        .map(Number);

    let maxHealth = Number(input.shift());

    let currentLine = input.shift();

    while (currentLine !== 'Retire') {
        currentLine = currentLine.split(' ');
        let command = currentLine[0];
        let index = Number(currentLine[1]);
        
        switch (command) {

            case 'Fire': if (warship[index]) {
                let damage = Number(currentLine[2]);
                warship[index] -= damage;

                if (warship[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return;
                }
            }
                break;

            case 'Defend': let endIndex = Number(currentLine[2]);
                 if (pirateShip[index] && pirateShip[endIndex]) {
                let damage = Number(currentLine[3]);

                for (let i = index; i <= endIndex; i++) {
                    pirateShip[i] -= damage;

                    if (pirateShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return;
                    }
                }
            }
                break;

            case 'Repair': if (pirateShip[index]) {
                let health = Number(currentLine[2]);
                pirateShip[index] += health;

                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
                break;

            case 'Status': let sectionsForRepair = 0;
                for (let i = 0; i < pirateShip.length; i++) {
                    let currentSection = pirateShip[i];

                    if (currentSection < maxHealth * 0.2) {
                        sectionsForRepair++;
                    }
                }
                console.log(`${sectionsForRepair} sections need repair.`);
                break;
        }

        currentLine = input.shift();
    }

    let pirateShipSum = 0;
    let warshipSum = 0;

    for (let el of pirateShip) {
        pirateShipSum += el;
    }

    for (let el of warship) {
        warshipSum += el;
    }

    console.log(`Pirate ship status: ${pirateShipSum}\nWarship status: ${warshipSum}`);
}

manOWar(['12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
])