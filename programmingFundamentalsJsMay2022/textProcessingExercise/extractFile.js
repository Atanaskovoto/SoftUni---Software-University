function extractFile(string) {
    let filePath = string
        .split('\\')
        .pop();

    let index = filePath.lastIndexOf('.');
    const name = filePath.substring(0, index);
    const extension = filePath.substring(index + 1);

    console.log(`File name: ${name}\nFile extension: ${extension}`) ;
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')