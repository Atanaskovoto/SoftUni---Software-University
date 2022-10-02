function maxSequenceOfEqualElements(array) {
    let sequence = [],
        arrayL = array.length;
    for (let i = 0; i < arrayL; i++) {
        let sequence1 = [];
        sequence1.push(array[i]);
        for (let n = i + 1; n < arrayL; n++) {
            if (array[i] === array[n]) {
                sequence1.push(array[n])
            } else {
                break;
            }
            if (sequence1.length > sequence.length) {
                sequence = sequence1;
            }
        }
    }
    console.log(sequence.join(' '));

    // Another solution:

    // let maxSequence = [];

    // for (let i = 0; i < input.length; i++) {
    //     let currentSequence = [];
    //     let currentElement = input[i];
    //     currentSequence.push(currentElement);
    //     for (let n = i + 1; n < input.length; n++) {
    //         nextElement = input[n];
    //         if (currentElement === nextElement) {
    //             currentSequence.push(nextElement);
    //         } else {
    //             break;
    //         }
    //     }
    //     if (maxSequence.length < currentSequence.length) {
    //         maxSequence = currentSequence;
    //     }
    // }
    // console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);