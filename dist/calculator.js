"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
;
const sumbtract = (a, b) => {
    return a - b;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("can't devide by zerro");
    }
    return a / b;
};
const power = (base, exponent = 2) => {
    return Math.pow(base, exponent);
};
// final function 
const calculate = (operation, a, b) => {
    switch (operation) {
        case "+": return add(a, b);
        case "-": return sumbtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        case "^": return power(a, b);
        default: throw new Error("Invalid operation");
    }
};
console.log("result", calculate("-", 33, 3));
//# sourceMappingURL=calculator.js.map