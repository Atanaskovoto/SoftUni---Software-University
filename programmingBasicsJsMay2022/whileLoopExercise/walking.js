function walking(input) {
    let index = 0;
    let steps = Number(input[index]);
    let backHome = input[index]
    index++;
    let totalSteps = 0;
   

    while (totalSteps < 10000) {
        if (backHome === 'Going home') {
            steps = Number(input[index]);
            totalSteps += steps;
            break;
        }
        totalSteps += steps;
        steps = Number(input[index]);
        backHome = input[index];
        index++;
    }
    if (totalSteps >= 10000) {
        console.log('Goal reached! Good job!');
        console.log(`${totalSteps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - totalSteps} more steps to reach goal.`);
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])



