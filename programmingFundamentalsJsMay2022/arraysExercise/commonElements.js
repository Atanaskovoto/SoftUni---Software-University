function commonElements(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let index = 0; index < arr2.length; index++) {
            if (arr1[i] === arr2[index]) {
                console.log(arr1[i]);
                break;
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])