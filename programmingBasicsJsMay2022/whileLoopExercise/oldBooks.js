function oldBooks(input) {
    let index = 0;
    let bookName = input[index];
    index++;
    let currentBook = input[index];
    let checkedBooks = 0;
    
    while (currentBook !== 'No More Books') {
        if (bookName === currentBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            break;
        } else {
            checkedBooks++;
            index++;
            currentBook = input[index];
        }
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

