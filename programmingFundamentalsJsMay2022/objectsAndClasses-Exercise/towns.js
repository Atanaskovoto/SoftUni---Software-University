function towns(input) {
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

    for (let info of input) {
        let currentInfo = info.split(' | ');
        let currentTown = {
            town: currentInfo[0],
            latitude: (Number(currentInfo[1])).toFixed(2),
            longitude: (Number(currentInfo[2])).toFixed(2)
        }
        console.log(currentTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])