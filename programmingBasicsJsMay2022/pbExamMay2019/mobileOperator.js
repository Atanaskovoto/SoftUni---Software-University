function mobileOperator(input) {
    let term = input[0];
    let type = input[1];
    let mobileInternet = input[2];
    let monthsCount = Number(input[3]);
    let fee = 0;

    switch (type) {
        case 'Small': switch (term) {
            case 'one': fee = 9.98; break;
            case 'two': fee = 8.58; break;
        } break;
        case 'Middle': switch (term) {
            case 'one': fee = 18.99; break;
            case 'two': fee = 17.09; break;
        } break;
        case 'Large': switch (term) {
            case 'one': fee = 25.98; break;
            case 'two': fee = 23.59; break;
        } break;
        case 'ExtraLarge': switch (term) {
            case 'one': fee = 35.99; break;
            case 'two': fee = 31.79; break;
        } break;
    }
    switch (mobileInternet) {
        case 'yes': if (fee <= 10) {
            fee += 5.50;
        } else if (fee <= 30) {
            fee += 4.35;
        } else {
            fee += 3.85;
        }
    }
    let totalFee = fee * monthsCount;
    switch (term) {
        case 'two': totalFee *= 0.9625;
    }
    console.log(`${totalFee.toFixed(2)} lv.`);
}
mobileOperator(["one",
"Small",
"yes",
"10"])
