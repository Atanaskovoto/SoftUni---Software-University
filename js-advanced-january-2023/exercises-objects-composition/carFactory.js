function carFactory(car) {
    const result = {};

    function makeEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else if (power <= 200) {
            return { power: 200, volume: 3500 };
        }
    }

    result.model = car.model;
    result.engine = makeEngine(car.power);
    result.carriage = { type: car.carriage, color: car.color };
    const wheelSize = car.wheelsize % 2 == 0 ? car.wheelsize - 1 : car.wheelsize;
    result.wheels = new Array(4).fill(wheelSize, 0, 4);

    return result; 
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));