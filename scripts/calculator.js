const isNumber = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number') return true;
    else return false;
}

const add = (a, b) => {
    if(!isNumber(a, b)) return NaN;
    else return a + b;
}

const subtract = (a, b) => {
    if(!isNumber(a, b)) return NaN;
    else return a - b;
}

const multiply = (a, b) => {
    if(!isNumber(a, b)) return NaN;
    else return a * b;
}

const divide = (a, b) => {
    if(!isNumber(a, b)) return NaN;
    else if (b === 0) return undefined;
    else return a / b;
}


const calculator = {};
calculator.add = add;
calculator.subtract = subtract;
calculator.multiply = multiply;
calculator.divide = divide;

export default calculator;