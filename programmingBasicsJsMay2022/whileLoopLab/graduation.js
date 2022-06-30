function graduation(input) {
    let name = input[0];
    let index = 1;
    let grade = Number(input[index]);
    let excluded = 0;
    let gradeCount = 1;
    let totalGrades = 0;

    while (index < input.length) {
        if (grade >= 4) {
            gradeCount++;
            totalGrades += grade;
            index++;
            grade = Number(input[index]);
            continue;
        } else {
            excluded++;
            if (excluded > 1) {
                console.log(`${name} has been excluded at ${gradeCount} grade`);
                break;
            }
        }
    }
    if (excluded <= 1) {
        let averageGrade = totalGrades / (gradeCount - 1);
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
