import capitalize from './capitalize';

test('recieves a string and returns the string capitalized', () => {
  expect(capitalize('test')).toBe('Test');
  expect(capitalize('this is another test     /')).toBe('This is another test     /');
});

test('recieves a capitalized string and returns the string capitalized', () => {
  expect(capitalize('Test')).toBe('Test');
});

test('recieves a special character as first value of string and throws an error', () => {
  expect(() => capitalize('@test')).toThrow('First letter must be a letter');
  expect(() => capitalize(' test')).toThrow('First letter must be a letter');
});

test('recieves an all uppercase string and returns the string capitalized', () => {
  expect(capitalize('TEST')).toBe('Test');
  expect(capitalize('ANOTHER TEST')).toBe('Another test');
});

test('receives a non-string input and throws an error', () => {
  expect(() => capitalize(5)).toThrow('Input must be of type string');
  expect(() => capitalize([])).toThrow('Input must be of type string');
  expect(() => capitalize(null)).toThrow('Input must be of type string');
  expect(() => capitalize(undefined)).toThrow('Input must be of type string');
  expect(() => capitalize({})).toThrow('Input must be of type string');
});
