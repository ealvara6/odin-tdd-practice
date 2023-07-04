import caesarCipher from './caesar-cipher';

test('Recieves a string input and a shift factor and returns the string with the letters shifted based on shift factor', () => {
  expect(caesarCipher('test', 1)).toBe('uftu');
  expect(caesarCipher('test', 2)).toBe('vguv');
  expect(caesarCipher('test', 0)).toBe('test');
});

test('expected to correctly wraps from z to a when ciphering', () => {
  expect(caesarCipher('zoo', 1)).toBe('app');
  expect(caesarCipher('zoo', 25)).toBe('ynn');
});

test('expects to return a ciphered string with the same capitalization', () => {
  expect(caesarCipher('Zoo', 1)).toBe('App');
  expect(caesarCipher('Zoo', 0)).toBe('Zoo');
});

test('expects to return a ciphered string with the same punctuation and spaces', () => {
  expect(caesarCipher('apple.', 1)).toBe('bqqmf.');
  expect(caesarCipher('This is another test.', 2)).toBe('Vjku ku cpqvjgt vguv.');
});

test('throws an error if first input is not of type string', () => {
  expect(() => caesarCipher(4, 2)).toThrow('first input must be a string');
});

test('throws an error if second input is not of type number', () => {
  expect(() => caesarCipher('test', 'another test')).toThrow('second input must be a number');
});
