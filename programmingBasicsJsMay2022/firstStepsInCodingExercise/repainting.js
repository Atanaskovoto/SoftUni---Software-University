function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hoursForWork = Number(input[3]);

    let moneyForMaterials = (nylon + 2) * 1.50 +
        (paint * 1.10) * 14.50 + paintThinner * 5 + 0.40;
    let moneyForMasters = (moneyForMaterials * 0.30) * hoursForWork;
    let totalMoney = moneyForMasters + moneyForMaterials;
    
    console.log(totalMoney);
}
repainting(['10', '11', '4', '8']);