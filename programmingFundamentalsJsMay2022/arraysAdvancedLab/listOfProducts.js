function listOfProducts(array) {
    array.sort();
  let arrayL = array.length;
    for (let i = 0; i <arrayL; i++) {
        console.log(`${i + 1}.${array[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);