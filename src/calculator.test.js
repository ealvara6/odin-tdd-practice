import Calculator from './calculator';

test('Add two numbers together and return the total', () => {
  expect(Calculator.add(1, 2)).toBe(3);
  expect(Calculator.add(1, 5)).toBe(6);
  expect(Calculator.add(0, 5)).toBe(5);
  expect(Calculator.add(0, 0)).toBe(0);
  expect(Calculator.add(-100.30, -300.40)).toBe(-400.70);
  expect(Calculator.add(-100, 300)).toBe(200);
});

test('Subtract two numbers and return the total', () => {
  expect(Calculator.subtract(1, 3)).toBe(-2);
  expect(Calculator.subtract(3, 1.5)).toBe(1.5);
  expect(Calculator.subtract(-10, -10)).toBe(0);
  expect(Calculator.subtract(-10, 10)).toBe(-20);
  expect(Calculator.subtract(10, -10)).toBe(20);
  expect(Calculator.subtract(0, 0)).toBe(0);
  expect(Calculator.subtract(0, -10)).toBe(10);
  expect(Calculator.subtract(-10, 0)).toBe(-10);
});

test('Divide two numbers and return the total', () => {
  expect(Calculator.divide(4, 2)).toBe(2);
  expect(Calculator.divide(2, 4)).toBe(0.5);
  expect(Calculator.divide(1, 3)).toBe(0.33);
  expect(Calculator.divide(-1, 3)).toBe(-0.33);
  expect(Calculator.divide(0, 3)).toBe(0);
});

test('Throws an error if divide functions recieves 0 as second input', () => {
  expect(() => Calculator.divide(1, 0)).toThrow('cannot divide by 0');
});

test('Multiply two numbers and return the total', () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
  expect(Calculator.multiply(0, 2)).toBe(0);
  expect(Calculator.multiply(2, 2.34)).toBe(4.68);
  expect(Calculator.multiply(0, 0)).toBe(0);
  expect(Calculator.multiply(-1, 1)).toBe(-1);
  expect(Calculator.multiply(-1, -1)).toBe(1);
});

test('Throws error if Calculator functions do not receive two numbers', () => {
  expect(() => Calculator.add(1, 'test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.add('test', 8)).toThrow('both inputs must be of type number');
  expect(() => Calculator.add('test', 'another test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.add({}, [])).toThrow('both inputs must be of type number');

  expect(() => Calculator.subtract(1, 'test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.subtract('test', 8)).toThrow('both inputs must be of type number');
  expect(() => Calculator.subtract('test', 'another test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.subtract({}, [])).toThrow('both inputs must be of type number');

  expect(() => Calculator.divide(1, 'test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.divide('test', 8)).toThrow('both inputs must be of type number');
  expect(() => Calculator.divide('test', 'another test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.divide({}, [])).toThrow('both inputs must be of type number');

  expect(() => Calculator.multiply(1, 'test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.multiply('test', 8)).toThrow('both inputs must be of type number');
  expect(() => Calculator.multiply('test', 'another test')).toThrow('both inputs must be of type number');
  expect(() => Calculator.multiply({}, [])).toThrow('both inputs must be of type number');
});

test('Throws error if Calculator functions only receive one input', () => {
  expect(() => Calculator.add(1)).toThrow('must recieves two inputs of type number');
  expect(() => Calculator.add('test')).toThrow('must recieves two inputs of type number');

  expect(() => Calculator.subtract(1)).toThrow('must recieves two inputs of type number');
  expect(() => Calculator.subtract('test')).toThrow('must recieves two inputs of type number');

  expect(() => Calculator.subtract(1)).toThrow('must recieves two inputs of type number');
  expect(() => Calculator.subtract('test')).toThrow('must recieves two inputs of type number');

  expect(() => Calculator.divide(1)).toThrow('must recieves two inputs of type number');
  expect(() => Calculator.divide('test')).toThrow('must recieves two inputs of type number');

  expect(() => Calculator.multiply(1)).toThrow('must recieves two inputs of type number');
  expect(() => Calculator.multiply('test')).toThrow('must recieves two inputs of type number');
});
