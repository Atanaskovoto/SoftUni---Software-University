function colorize() {
    const rows = document.getElementsByTagName('tr');
    let index = 0;
    for (const el of rows) {
        index++;
        if (index % 2 == 0) {
            el.style.background = 'teal';
        }
    }
}