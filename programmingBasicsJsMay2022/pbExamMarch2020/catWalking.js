function catWalking(input) {

    let minutes = Number(input[0]);
    let numberOfwalks = Number(input[1]);
    let calories = Number(input[2]);

    let totalminutes = minutes * numberOfwalks;
    let totalCalories = totalminutes * 5;

    if (totalCalories >= (calories / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }
}

catWalking(["15", "2", "500"])

