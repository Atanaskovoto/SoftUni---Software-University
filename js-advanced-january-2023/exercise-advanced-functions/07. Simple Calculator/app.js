function calculator() {
    let num1;
    let num2;
    let result;

    function add() {
        result.value = Number(num1.value) + Number(num2.value);
    }

    function subtract() {
        result.value = Number(num1.value) - Number(num2.value);
    }

    function init(selctor1, selector2, resultSelector) {
        num1 = document.querySelector(selctor1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    return {
        add,
        subtract,
        init,
    };

}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 