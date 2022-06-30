function salary(input) {
    let openTabs = Number(input[0]);
    let paycheck = Number(input[1]);


    for (let i = 2; i <= input.length; i++) {
        let currentTab = input[i];
        switch (currentTab) {
            case 'Facebook': paycheck -= 150; break;
            case 'Instagram': paycheck -= 100; break;
            case 'Reddit': paycheck -= 50; break;
        }
        if (paycheck <= 0) {
            console.log('You have lost your salary.');
            break;
        }
    }
    if (paycheck > 0) {
        console.log(Math.round(paycheck));
    } 
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



