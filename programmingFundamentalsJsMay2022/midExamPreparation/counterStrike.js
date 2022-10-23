function counterStrike(input) {

    let energy = Number(input.shift());

    let distance = input.shift();
    let wins = 0;

    while (distance != 'End of battle') {
            distance = Number(distance);
        let usedEnergy = Number(distance);
       
        if (energy >= distance) {
            energy -= usedEnergy;
            wins++;
            if (wins % 3 === 0) {
                energy += wins;
            } 

        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            return;
        }

        distance = input.shift();
    }

    console.log(`Won battles: ${wins}. Energy left: ${energy}`);
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])


