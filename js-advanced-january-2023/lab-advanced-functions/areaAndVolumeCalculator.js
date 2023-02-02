function solve(areaFunc, vol, input) {
    const result = []

    for (const line of JSON.parse(input)) {
        const volume = vol.call(line);
        const area = areaFunc.call(line);

        result.push({
            area,
            volume,
        })
    }

    return result;
}

const vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};

const area = function area() {
    return Math.abs(this.x * this.y);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
)