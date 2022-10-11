function formatGrade(grade) {

    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }

    // Another solution:

    // let description = '';

    // if (grade < 3) {
    //     description = 'Fail (2)';
    // } else if (grade < 3.5) {
    //     description = `Poor (${grade.toFixed(2)})`;
    // } else if (grade < 4.5) {
    //     description = `Good (${grade.toFixed(2)})`;
    // } else if (grade < 5.5) {
    //     description = `Very good (${grade.toFixed(2)})`;
    // } else {
    //     description = `Excellent (${grade.toFixed(2)})`;
    // }
    // console.log(description);

}
formatGrade(2.5);