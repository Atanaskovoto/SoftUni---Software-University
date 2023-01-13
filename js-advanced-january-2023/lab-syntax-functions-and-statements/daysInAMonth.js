function daysInAMonth(month, year) {
    const date = new Date(year, month - 1, 1);

    const days = [];
    while (date.getMonth() === month - 1) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);

    }
    console.log(days.length);
}

daysInAMonth(1, 2012);
daysInAMonth(2, 2021);
