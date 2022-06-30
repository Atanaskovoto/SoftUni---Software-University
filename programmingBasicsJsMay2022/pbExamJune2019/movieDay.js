function movieDay(input) {

    let timeForMovie = Number(input[0]);
    let numberOfStages = Number(input[1]);
    let timeOfStage = Number(input[2]);

    let terrainPreparation = timeForMovie * 0.15;
    let totalTime = numberOfStages * timeOfStage +
        terrainPreparation;

    if (timeForMovie >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForMovie - totalTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTime - timeForMovie)} minutes.`);
    }
}
movieDay(["120", "10", "11"])