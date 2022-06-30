function time15Minutes(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMinutes = minutes + 15;


    if (totalMinutes <= 59) {
        if (totalMinutes < 10) {
            console.log(`${hour}:0${totalMinutes}`);
        } else {
            console.log(`${hour}:${totalMinutes}`);
        }
    }
    if (totalMinutes > 59) {
        totalMinutes -= 60;
        hour += 1;
        if (hour > 23) {
            hour -= 24
            if (totalMinutes < 10) {
                console.log(`${hour}:0${totalMinutes}`);
            } else {
                console.log(`${hour}:${totalMinutes}`);
            }
        } else if (totalMinutes < 10) {
            console.log(`${hour}:0${totalMinutes}`);
        } else {
            console.log(`${hour}:${totalMinutes}`);
        }
    }
}

time15Minutes(["22", "59"])