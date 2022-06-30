function examPreparation(input) {
    let index = 0;
    let lowerGrades = Number(input[index]);
    index++;
    let problem = input[index];
    index++;
    let grade = Number(input[index]);
    let badGrades = 0;
    let totalGrades = 0;
    let counter = 0;

    while (problem !== 'Enough') {
        if (grade <= 4) {
            badGrades++;
            if (badGrades === lowerGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        totalGrades += grade;
        index++;
        problem = input[index];
        index++;
        grade = Number(input[index]);
        counter++;
    }
    if (problem === 'Enough') {
        index -= 3;
        let lastproblem = input[index];
        let averageGrade = totalGrades / counter;
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastproblem}`);
    }
}
examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])
