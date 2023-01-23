function extract(content) {
    const text = document.getElementById(content).textContent;
    const array = text.split('');
    const result = [];

    while (array.includes(')')) {
        const start = array.indexOf('(');
        const end = array.indexOf(')');
        const current = array.slice(start + 1, end);
        array.splice(end, 1);
        array.splice(start, 1);
        const textResult = current.join('');
        result.push(textResult);
    }

    return result.join('; ')
}