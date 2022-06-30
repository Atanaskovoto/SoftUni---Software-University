function footballKit(input) {
    let shirtPrice = Number(input[0]);
    let winPrice = Number(input[1]);

    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let budsPrice = (shirtPrice + shortsPrice) * 2;

    let totalPrice = (shirtPrice + shortsPrice + socksPrice + budsPrice) * 0.85;

    if (totalPrice >= winPrice) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${(winPrice - totalPrice).toFixed(2)} lv. more.`);
    }
}
footballKit(["55",
"310"])

