function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;

    switch (product) {
        case 'coffee': switch (city) {
            case 'Sofia': totalPrice = quantity * 0.50; break;
            case 'Plovdiv': totalPrice = quantity * 0.40; break;
            case 'Varna': totalPrice = quantity * 0.45; break;
        } break;
        case 'water': switch (city) {
            case 'Sofia': totalPrice = quantity * 0.80; break;
            case 'Plovdiv':
            case 'Varna': totalPrice = quantity * 0.70; break;
        } break;
        case 'beer': switch (city) {
            case 'Sofia': totalPrice = quantity * 1.20; break;
            case 'Plovdiv': totalPrice = quantity * 1.15; break;
            case 'Varna': totalPrice = quantity * 1.10; break;
        } break;
        case 'sweets': switch (city) {
            case 'Sofia': totalPrice = quantity * 1.45; break;
            case 'Plovdiv': totalPrice = quantity * 1.30; break;
            case 'Varna': totalPrice = quantity * 1.35; break;
        } break;
        case 'peanuts': switch (city) {
            case 'Sofia': totalPrice = quantity * 1.60; break;
            case 'Plovdiv': totalPrice = quantity * 1.50; break;
            case 'Varna': totalPrice = quantity * 1.55; break;
        } break;
    }
    console.log(totalPrice);
}
smallShop(["peanuts",
"Plovdiv",
"1"])

