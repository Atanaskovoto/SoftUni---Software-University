function excursionCalculator(input) {
    let peoplesCount = Number(input[0]);
    let seasson = input[1];
    let totalPrice = 0;

    if (peoplesCount <= 5) {
        switch (seasson) {
            case "spring": totalPrice = peoplesCount * 50; break;
            case "summer": totalPrice = (peoplesCount * 48.50) * 0.85; break;
            case "autumn": totalPrice = peoplesCount * 60; break;
            case "winter": totalPrice = (peoplesCount * 86) * 1.08; break;
        }
    } else {
        switch (seasson) {
            case "spring": totalPrice = peoplesCount * 48; break;
            case "summer": totalPrice = (peoplesCount * 45) * 0.85; break;
            case "autumn": totalPrice = peoplesCount * 49.50; break;
            case "winter": totalPrice = (peoplesCount * 85) * 1.08; break;
        }
    }
    console.log(`${totalPrice.toFixed(2)} leva.`)
}
excursionCalculator(["5",
    "spring"])
