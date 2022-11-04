function addressBook(input) {
    const personInfo = {};
   
    for (const line of input) {
        const [name, address] = line.split(':');
        personInfo[name] = address;
    }

    const personInfoArray = Object.entries(personInfo);

    personInfoArray.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, address] of personInfoArray) {
        console.log(`${name} -> ${address}`);
    }
}

addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])