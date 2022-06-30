function fishTank(input) {
    let lenghtInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percentsReduction = Number(input[3]) / 100;

    let volumeInLiters = (lenghtInCm * widthInCm * heightInCm) /
        1000 * (1 - percentsReduction);

    console.log(volumeInLiters);
}
fishTank(['85', '75', '47', '17'])