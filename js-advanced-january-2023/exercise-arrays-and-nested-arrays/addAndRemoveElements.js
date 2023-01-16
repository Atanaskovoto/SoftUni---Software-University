function addAndRemoveElements(input) {
    const result = [];
    let number = 0;
    for (const command of input) {
        switch (command) {
            case 'add': number++; result.push(number); break;
            case 'remove': number++; result.pop(); break;
        }
    }
    if (!result.length) {
        console.log('Empty');
    }
    console.log(result.join('\n'));
}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
// addAndRemoveElements(['remove',
//     'remove',
//     'remove',
// ]);