function vetParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let fee = 0;
    let totalFee = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 2 !== 0) {
            for (let h = 1; h <= hours; h++) {
                if (h % 2 !== 0) {
                    fee += 1;
                } else {
                    fee += 1.25;
                }
            }
            console.log(`Day: ${i} - ${fee.toFixed(2)} leva`);
            totalFee += fee;
            fee = 0;
        } else {
            for (let h = 1; h <= hours; h++) {
                if (h % 2 !== 0) {
                    fee += 2.50;
                } else {
                    fee += 1;
                }
            }
            console.log(`Day: ${i} - ${fee.toFixed(2)} leva`);
            totalFee += fee;
            fee = 0;
        }
    }
    console.log(`Total: ${totalFee.toFixed(2)} leva`)
}
vetParking(["5",
"2"])

