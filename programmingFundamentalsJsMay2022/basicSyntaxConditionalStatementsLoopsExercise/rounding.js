function rounding(value, roundedNumber,) {
    if (roundedNumber > 15) {
        roundedNumber = 15;
    }
    console.log(parseFloat(value.toFixed(roundedNumber)));
}
rounding(10.5, 3);