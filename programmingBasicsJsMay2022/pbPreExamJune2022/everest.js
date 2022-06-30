function everest(input) {
    let index = 0;
    let command = input[index];
    let totalMeters = 5364;
    let daysToClimb = 1;
    let isClimbed = false;

    while (command != 'END') {
        let willSleep = input[index++];
        let currentMeters = Number(input[index++]);
            if (willSleep === 'Yes') {
            daysToClimb++;
            if (daysToClimb > 5) {
                break;
            }
        }
        totalMeters += currentMeters;
        if (totalMeters >= 8848) {
            isClimbed = true;
            break;
           
        }
        command = input[index];
    }
    if (isClimbed) {
        console.log(`Goal reached for ${daysToClimb} days!`);
    } else {
        console.log('Failed!');
        console.log(`${totalMeters}`);
    }
}
everest(["Yes",
"1000",
"Yes",
"945",
"No",
"1200",
"END"])

