function requiredReading(pagesCount, pagesRedForHour, daysCount) {
    let totalHours = pagesCount / pagesRedForHour;
    let hoursPerDay = totalHours / daysCount;

    console.log(hoursPerDay);
}
requiredReading(212, 20, 2)