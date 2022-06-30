function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsForMeter = Number(input[2]);

    let time = distance * secondsForMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let newRecord = time + delay;

    if (newRecord < record) {
        console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(newRecord - record).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67", "3017", "5.03"])

