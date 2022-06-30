function tradeCommissions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let percent = 0;
    let commission = 0;
    let a = 0;

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case 'Sofia': percent = 0.05;
                break;
            case 'Varna': percent = 0.045;
                break;
            case 'Plovdiv': percent = 0.055;
                break;
            default: console.log('error');
                a++;
                break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (city) {
            case 'Sofia': percent = 0.07;
                break;
            case 'Varna': percent = 0.075;
                break;
            case 'Plovdiv': percent = 0.08;
                break;
            default: console.log('error');
                a++;
                break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (city) {
            case 'Sofia': percent = 0.08;
                break;
            case 'Varna': percent = 0.10;
                break;
            case 'Plovdiv': percent = 0.12;
                break;
            default: console.log('error');
                a++;
                break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case 'Sofia': percent = 0.12;
                break;
            case 'Varna': percent = 0.13;
                break;
            case 'Plovdiv': percent = 0.145;
                break;
            default: console.log('error');
                a++;
                break;
        }
    } else {
        console.log('error');
        a++;
    }
    if (a === 0) {
        commission = sales * percent;
        console.log(commission.toFixed(2));
    }
}
tradeCommissions(["Plovdiv",
    "-20"])

