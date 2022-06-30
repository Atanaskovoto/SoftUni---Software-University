function suppliesForSchool(input) {
    let countPencils = Number(input[0]);
    let countMarkers = Number(input[1]);
    let boardCleaner = Number(input[2]);
    let percentageReduction = Number(input[3]) / 100;

    let moneyForSupplies = countPencils * 5.80 +
        countMarkers * 7.20 + boardCleaner * 1.20;
    let moneyWithDiscount = moneyForSupplies - moneyForSupplies * percentageReduction;

    console.log(moneyWithDiscount);
}
suppliesForSchool(['2', '3', '4', '25'])