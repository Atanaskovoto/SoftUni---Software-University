function functionalSum(number) {

    const innerFunc = function (n) {
        number += n;
        return innerFunc;
    }

    innerFunc.toString = function () {
        return number;
    }
return innerFunc;
}

console.log(functionalSum(2)(1).toString());

