function easterParty(input) {

    let guests = Number(input[0]);
    let pricePerGuest = Number(input[1]);
    let budget = Number(input[2]);
    let cake = budget * 0.10;

    if (guests >= 10 && guests <= 15) {
        pricePerGuest = pricePerGuest * 0.85;
    } else if (guests > 15 && guests <= 20) {
        pricePerGuest = pricePerGuest * 0.80;
    } else if (guests > 20) {
        pricePerGuest = pricePerGuest * 0.75;
    }

    let totalPrice = pricePerGuest * guests + cake;

    if (budget >= totalPrice) {

        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`)

    } else {

        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`)

    }

}

easterParty(["18",
    "30",
    "450"])
