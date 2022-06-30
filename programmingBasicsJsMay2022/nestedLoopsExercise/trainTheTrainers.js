function trainTheTrainers(input) {
    let index = 0;
    let command = input[index];
    let juryCount = Number(input[index++]);
    let finalSum = 0;
    let counter = 0;

    while (command !== 'Finish') {

        let name = input[index++];
        let sum = 0;
        for (let i = 0; i < juryCount; i++) {
            let evaulation = Number(input[index++]);
            sum += evaulation;
            finalSum += evaulation;
            counter++;
        }
        command = input[index];
        console.log(`${name} - ${(sum / juryCount).toFixed(2)}.`);
    }
    console.log(`Student's final assessment is ${(finalSum / counter).toFixed(2)}.`);
}
trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])

