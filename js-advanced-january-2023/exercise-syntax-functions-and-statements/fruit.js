function fruitPrice(fruit, weight, price) {

    const weightInKg = weight / 1000;
    const totalPrice = weightInKg * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruitPrice('orange', 2500, 1.80);
fruitPrice('apple', 1563, 2.35);