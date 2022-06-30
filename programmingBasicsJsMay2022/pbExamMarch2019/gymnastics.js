function gymnastics(input) {

    let country = input[0];
    let type = input[1];

    let grade1 = 0;
    let grade2 = 0;

    switch (country) {
        case 'Russia': switch (type) {
            case 'ribbon': grade1 = 9.10;
                grade2 = 9.40; break;
            case 'hoop': grade1 = 9.30;
                grade2 = 9.80; break;
            case 'rope': grade1 = 9.60;
                grade2 = 9.00; break;
        } break;
        case 'Bulgaria': switch (type) {
            case 'ribbon': grade1 = 9.60;
                grade2 = 9.40; break;
            case 'hoop': grade1 = 9.55;
                grade2 = 9.75; break;
            case 'rope': grade1 = 9.50;
                grade2 = 9.40; break;
        } break;
        case 'Italy': switch (type) {
            case 'ribbon': grade1 = 9.20;
                grade2 = 9.50; break;
            case 'hoop': grade1 = 9.45;
                grade2 = 9.35; break;
            case 'rope': grade1 = 9.70;
                grade2 = 9.15; break;
        } break;
    }

    let totalGrade = grade1 + grade2;
    let percent = (20 - totalGrade) / 20 * 100;

    console.log(`The team of ${country} get ${totalGrade.toFixed(3)} on ${type}.`);
    console.log(`${percent.toFixed(2)}%`)

}
gymnastics(["Russia", "rope"])

