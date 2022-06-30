function vacationBooksList(input) {
    let countPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let countDays = Number(input[2]);

    let hoursForReading = countPages / pagesPerHour / countDays;

    console.log(hoursForReading);
}
vacationBooksList(['212', '20', '2']);