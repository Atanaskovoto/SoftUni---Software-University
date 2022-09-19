function ages(age) {
    if (age >= 0 && age <=2) {
        console.log('baby');
    } else if (age > 2 && age <= 13) {
        console.log('child');
    } else if (age > 13 && age <= 19) {
        console.log('teenager');
    } else if (age > 19 && age <= 65) {
        console.log('adult');
    } else if (age > 65) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
    // Another solution :
    // let typeOfPerson = 'out of bounds';

    // if (age >= 0 && age <= 2) {
    //     typeOfPerson = 'baby';
    // } else if (age >= 3 && age <= 13) {
    //     typeOfPerson = 'child';
    // } else if (age >= 14 && age <= 19) {
    //     typeOfPerson = 'teenager';
    // } else if (age >= 20 && age <= 65) {
    //     typeOfPerson = 'adult';
    // } else if (age >= 66) {
    //     typeOfPerson = 'elder';
    // }
    // console.log(typeOfPerson);
}
ages(0);