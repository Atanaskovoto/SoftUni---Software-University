function printEveryNthElementFromAnArray(input, n) {
    const result = [];

    for (let i =0; i < input.length; i += n) {
        result.push(input[i]);
    }

    return result;
}

printEveryNthElementFromAnArray(['5',
'20',
'31',
'4',
'20'],
2
);
printEveryNthElementFromAnArray(['dsa',
'asd',
'test',
'tset'],
2
);