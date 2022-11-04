function schoolGrades(input) {
    const studentsGrades = {};

    input.sort((a, b) => a.localeCompare(b));

    for (const line of input) {
        let studentInfo = line.split(' ');
        let name = studentInfo.shift();
      
        let grades = studentInfo.map(Number);
        
        if (!studentsGrades.hasOwnProperty(name)) {
            studentsGrades[name] = grades;
        } else {
            studentsGrades[name] = grades.concat(studentsGrades[name]);
        }
    }

    for (const key in studentsGrades) {

        let grades = studentsGrades[key];

        let sum = 0;
        for (const grade of grades) {
            sum += grade;
        }

        let averageGrade = sum / grades.length;

        console.log(`${key}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);