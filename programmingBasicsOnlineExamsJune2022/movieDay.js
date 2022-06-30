function movieDay(input) {
    let timeForMovie = Number(input[0]);
    let numberStages = Number(input[1]);
    let timeOnStage = Number(input[2]);
    let preparationTime = timeForMovie * 0.15;
    let totalTimeStages = numberStages * timeOnStage +
        preparationTime;
    if (totalTimeStages <= timeForMovie) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForMovie - totalTimeStages)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTimeStages - timeForMovie)} minutes.`)
    }
}
movieDay(['120', '10', '11'])