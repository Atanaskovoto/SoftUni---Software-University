function oscars(input) {
    let name = input[0];
    let pointsFromAcademy = Number(input[1]);
    let juryCount = Number(input[2] * 2 + 2);

    for (let i = 3; i <= juryCount; i++) {
        let juryName = input[i];
        i++;
        let pointsFromJury = Number(input[i]);
        let totalPointsFromJury = juryName.length * pointsFromJury / 2;
        pointsFromAcademy += totalPointsFromJury;
        if (pointsFromAcademy >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${pointsFromAcademy.toFixed(1)}!`);
            break;
        }
    }
    if (pointsFromAcademy < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - pointsFromAcademy).toFixed(1)} more!`);
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])

