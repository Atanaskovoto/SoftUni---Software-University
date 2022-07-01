function echoType(param) {
    let typeOf = typeof param;
    console.log(typeOf);
    if (typeOf === 'string' || typeOf === 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
echoType(18);
echoType('Hello, JavaScript!');
echoType(null);
