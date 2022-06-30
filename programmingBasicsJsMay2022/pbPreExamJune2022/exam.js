function exam(input) {
    let studentsCount = Number(input[0]);
    let grade1 = 0;
    let grade2 = 0;
    let grade3 = 0;
    let grade4 = 0;
    let totalGrade = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let currentGrade = Number(input[i]);
        totalGrade += currentGrade;
        if (currentGrade < 3) {
            grade1++;
        } else if (currentGrade < 4) {
            grade2++;
        } else if (currentGrade < 5) {
            grade3++;
        } else {
            grade4++;
        }
    }
    console.log(`Top students: ${(grade4 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(grade3 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(grade2 / studentsCount * 100).toFixed(2)}%`);
    console.log(`Fail: ${(grade1 / studentsCount * 100).toFixed(2)}%`);

    let averageGrade = totalGrade / studentsCount;
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}
exam(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"])

