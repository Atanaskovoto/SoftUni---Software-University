function extractText() {
    const items = document.getElementById('items');
    const list = Array.from(items.children);

    const result = list
        .map(el => el.textContent)
        .join('\n');

    const returnValue = document.getElementById('result');
    returnValue.value = result;
}