function mergeArrays(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            arr3[i] = arr1[i] + arr2[i];
        }
    }
    console.log(arr3.join(' - '));

    // Another solution:

    // let rezult = [];

    // for (let i = 0; i < firstArray.length; i++) {
    //     if (i % 2 == 0) {
    //         let currentData = Number(firstArray[i]) + Number(secondArray[i]);
    //         rezult.push(currentData);
    //     } else {
    //         let currentData = firstArray[i] + secondArray[i];
    //         rezult.push(currentData);
    //     }
    // }
    // console.log(rezult.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])