function convertMetersToKilometres(distanceInMeters) {
    let distanceInKilometers = (distanceInMeters / 1000).toFixed(2);
    console.log(distanceInKilometers);
}
convertMetersToKilometres(1852);