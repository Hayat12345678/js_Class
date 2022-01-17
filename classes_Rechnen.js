class Calculator {
    add(a, b) {
        return a + b;
    }

    substract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
};


const calculator = new Calculator();
let number1 = calculator.add(3, 7);
calculator.add(3, 7);
let number2 = calculator.substract(3, 7);
calculator.substract(3, 7);
let number3 = calculator.multiply(3, 7);
calculator.multiply(3, 7);
let number4 = calculator.divide(3, 7);
calculator.divide(3, 7);


console.log(number1, number2, number3, number4.toFixed(2));