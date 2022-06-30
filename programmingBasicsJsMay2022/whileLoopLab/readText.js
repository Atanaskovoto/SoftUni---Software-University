function readText(input) {
    
    let index = 0;
    let name = input[index];


    while (name !== 'Stop') {
       
        console.log(name)
        index++
        name = input[index];

    }
    
}

readText(['nakov', 'softuni', 'Stop'])