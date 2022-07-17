function evenAndOddSubtraction(array) {
    let even = 0,
        odd = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(even - odd);
}
evenAndOddSubtraction([1,2,3,4,5,6]);