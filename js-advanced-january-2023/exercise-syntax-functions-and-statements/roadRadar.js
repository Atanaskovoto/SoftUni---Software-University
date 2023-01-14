function roadRadar(speed, area) {

    const zoneSpeedLimit = {
        'city': 50,
        'residential': 20,
        'interstate': 90,
        'motorway': 130
    };

    const difference = speed - zoneSpeedLimit[area];
    let status = 'reckless driving';

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${zoneSpeedLimit[area]} zone`);
    } else {
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${zoneSpeedLimit[area]} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');