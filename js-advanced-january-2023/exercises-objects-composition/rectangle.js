function rectangle(width, height, color) {
    const upper = color.split('');
    upper[0] = upper[0].toUpperCase();
    color = upper.join('');

    const rectangle = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    };

    return rectangle;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());