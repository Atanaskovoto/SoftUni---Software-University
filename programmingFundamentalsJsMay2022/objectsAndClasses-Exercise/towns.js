function towns(input) {
    // Another solution:
    // class Town {
    //     constructor(town, latitude, longitude) {
    //         this.town = town;
    //         this.latitude = latitude;
    //         this.longitude = longitude;
    //     }
    // }
    // for (let info of input) {
    //     let currentInfo = info.split(' | ');
    //     let currentTown = new Town(currentInfo[0], (Number(currentInfo[1])).toFixed(2), (Number(currentInfo[2])).toFixed(2));
    //     console.log(currentTown);
    // }

    // Another solution:
    // for (let info of input) {
    //     let currentInfo = info.split(' | ');
    //     let currentTown = {
    //         town: currentInfo[0],
    //         latitude: (Number(currentInfo[1])).toFixed(2),
    //         longitude: (Number(currentInfo[2])).toFixed(2)
    //     }
    //     console.log(currentTown);
    // }

    // Another solution:

    for (const el of input) {
        let [town, latitude, longitude] = el.split(' | ');

        let table = {
            town: town,
            latitude: (Number(latitude)).toFixed(2),
            longitude: (Number(longitude)).toFixed(2),
        }

        console.log(table);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])