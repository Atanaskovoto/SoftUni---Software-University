function sortArray(input, order) {

    function ascending() {
        return input.sort((a, b) => a - b);
    }

    function descending() {
        return input.sort((a, b) => b - a);
    }

    switch (order) {
        case 'asc': return ascending(); break;
        case 'desc': return descending(); break;
    }
}



sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');