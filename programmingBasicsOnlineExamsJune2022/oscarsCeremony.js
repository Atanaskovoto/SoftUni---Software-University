function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let statue = rent * 0.70;
    let ketaring = statue * 0.85;
    let sound = ketaring / 2;
    let totalPrice = rent + statue +
    ketaring + sound;
    console.log(totalPrice.toFixed(2));
}
oscarsCeremony(['5555'])