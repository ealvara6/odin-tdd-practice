import handleError from './error';

class Calculator {
  static add(num1, num2) {
    this.checkInputs(num1, num2);

    return num1 + num2;
  }

  static subtract(num1, num2) {
    this.checkInputs(num1, num2);

    return num1 - num2;
  }

  static divide(num1, num2) {
    this.checkInputs(num1, num2);

    if (num2 === 0) throw new Error('cannot divide by 0');

    const result = num1 / num2;
    if (result % 1 !== 0) return parseFloat(result.toFixed(2));

    return result;
  }

  static multiply(num1, num2) {
    this.checkInputs(num1, num2);

    return num1 * num2;
  }

  static checkInputs(num1, num2) {
    if (num1 === undefined || num2 === undefined) throw new Error(handleError('must recieves two inputs of type number'));
    if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error(handleError('both inputs must be of type number'));
  }
}

export default Calculator;
