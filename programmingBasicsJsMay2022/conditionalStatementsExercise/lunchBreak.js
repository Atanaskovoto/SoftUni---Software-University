function lunchBreak(input) {

    let nameOfMovie = input[0];
    let timeForMovie = Number(input[1]);
    let timeForBreak = Number(input[2]);

    let timeForLunch = timeForBreak / 8;
    let timeForRest = timeForBreak / 4;
    let timeLeft = timeForBreak - timeForLunch - timeForRest;

    if (timeLeft >= timeForMovie) {
        console.log(`You have enough time to watch ${nameOfMovie} and left with ${Math.ceil(timeLeft - timeForMovie)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameOfMovie}, you need ${Math.ceil(timeForMovie - timeLeft)} more minutes.`);
    }
}

lunchBreak(["Game of Thrones",
    "60",
    "96"])
