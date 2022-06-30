function oldBooks(input) {
    let index = 0;
    let bookName = input[index];
    index++;
    let currentBook = input[index];
    let checkedBooks = 0;

    while (currentBook !== 'No More Books') {
        if (bookName !== currentBook) {
            checkedBooks++;
            index++;
            currentBook = input[index];
            continue;
        }
        console.log(`You checked ${checkedBooks} books and found it.`);
        break;
    }
    if (currentBook === 'No More Books') {
        console.log("The book you search is not here!");
        console.log(`You checked ${checkedBooks} books.`)
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

