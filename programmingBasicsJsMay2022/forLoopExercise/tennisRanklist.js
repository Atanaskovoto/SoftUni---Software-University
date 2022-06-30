function tennisRanklist(input) {
    let tournamentCount = Number(input[0]);
    let earnedPoints = Number(input[1]);
    let tournamentPoints = 0;
    let tournamentWins = 0;

    for (let i = 2; i < input.length; i++) {
        let tournamentResult = input[i];

        switch (tournamentResult) {
            case 'W': tournamentPoints += 2000;
                tournamentWins++;
                break;
            case 'F': tournamentPoints += 1200; break;
            case 'SF': tournamentPoints += 720; break;
        }
    }
    let averagePoints = Math.floor(tournamentPoints / tournamentCount);
    let percentWinTournaments = (tournamentWins / tournamentCount * 100).toFixed(2);
    let totalPoints = earnedPoints + tournamentPoints;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentWinTournaments}%`);
}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
