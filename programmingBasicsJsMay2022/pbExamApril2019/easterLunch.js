function easterLunch(input) {

    let easterBread = Number(input[0]);
    let eggs = Number(input[1]);
    let cookies = Number(input[2]);

    let priceEasterBread = easterBread * 3.20;
    let priceEggs = eggs * 4.35;
    let pricePaintEggs = eggs * 12 * 0.15;
    let priceCookies = cookies * 5.40;

    let totalPrice = priceCookies + priceEasterBread +
        priceEggs + pricePaintEggs;

    console.log(totalPrice.toFixed(2));

}

easterLunch(["3",
    "2",
    "3"])
