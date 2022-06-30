function yardGreening(input) {
    let squareMeters = Number(input[0]);
    let Price = squareMeters * 7.61;
    let discount = Price * 0.18;
    let totalPrice = Price - discount;
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
yardGreening(['550'])