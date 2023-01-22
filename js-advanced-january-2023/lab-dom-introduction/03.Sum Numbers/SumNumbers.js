function calc() {
    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');
    const result = Number(input1.value) + Number(input2.value);
    const sum = document.getElementById('sum');
    sum.value = result;
}
