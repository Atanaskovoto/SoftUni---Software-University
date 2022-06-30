function onTimeForTheExam(input) {

    let hourOfExam = Number(input[0]);
    let minuteOfExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    let timeOfExam = hourOfExam * 60 + minuteOfExam;
    let timeOfArrival = hourOfArrival * 60 + minuteOfArrival;
    let difference = timeOfArrival - timeOfExam;

    let hours = Math.floor(Math.abs(difference / 60));
    let minutes = Math.abs(difference % 60);

    if (difference > 0) {
        console.log('Late');
        if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        } else {
            console.log(`${minutes} minutes after the start`);
        }
    } else if (difference === 0 || difference >= -30) {
        console.log('On time');
        if (difference !== 0) {
            console.log(`${Math.abs(difference)} minutes before the start`);
        }
    } else if (difference < -30) {
        console.log('Early');
        if (hours > 0) {
            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        } else {
            console.log(`${minutes} minutes before the start`);
        }
    }
}
onTimeForTheExam(["11", "30", "8", "12"]);





