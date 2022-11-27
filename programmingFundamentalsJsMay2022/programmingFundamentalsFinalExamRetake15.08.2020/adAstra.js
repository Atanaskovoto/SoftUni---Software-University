function adAstra(input) {
    const pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    // Another solution: this is correct but Judge didnt like it because he doesnt know what is function "match"!

    // const foodInfo = input.match(pattern);

    // let allCalories = 0;
    // for (const food of foodInfo) {
    //     const currentChar = food[0];
    //     const arrayInfo = food.split(`${currentChar}`);
    //     const currentCal = arrayInfo[arrayInfo.length - 2];
    //     allCalories += Number(currentCal);
    // }
    let allCalories = 0;
    let foodInfo = pattern.exec(input);
    while (foodInfo) {
        const currentCal = Number(foodInfo.groups.calories);
        allCalories += currentCal;
        foodInfo = pattern.exec(input);
    }

    const days = Math.floor((allCalories / 2000));

    console.log(`You have food to last you for: ${days} days!`);

    let result = pattern.exec(input);
    while (result) {
        console.log(`Item: ${result.groups['name']}, Best before: ${result.groups['date']}, Nutrition: ${result.groups['calories']}`);

        result = pattern.exec(input);
    }

}

adAstra('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')