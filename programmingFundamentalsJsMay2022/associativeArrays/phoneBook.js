function phoneBook(input) {
    const personInfo = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        personInfo[name] = phone;
    }

    for (const key in personInfo) {
        console.log(`${key} -> ${personInfo[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);