function piccolo(input) {
    const parking = {};

    for (const line of input) {
        const [direction, carNumber] = line.split(', ');

        switch (direction) {
            case 'IN':
                parking[carNumber] = 0;
                break;

            case 'OUT':
                delete parking[carNumber];
                break;
        }
    }

    const result = Object.entries(parking).sort(([a], [b]) => a.localeCompare(b));

    if (!result.length) {
        console.log('Parking Lot is Empty');
        return;
    }

    for (const [carNumber, value] of result) {
        console.log(carNumber);
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU']);