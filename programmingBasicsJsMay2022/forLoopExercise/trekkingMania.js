function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let totalPeople = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        let currentGroup = Number(input[i]);
        totalPeople += currentGroup;
        if (currentGroup <=5) {
            p1 += currentGroup;
        } else if (currentGroup <= 12) {
            p2 += currentGroup;
        } else if (currentGroup <= 25) {
            p3 += currentGroup;
        } else if (currentGroup <= 40) {
            p4 += currentGroup;
        } else {
            p5 += currentGroup;
        }
    }
    console.log(`${(p1 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(p2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(p3 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(p4 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(p5 / totalPeople * 100).toFixed(2)}%`);
}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
