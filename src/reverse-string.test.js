import reverseString from './reverse-string';

test('Recieves a string and returns it reversed', () => {
  expect(reverseString('test')).toBe('tset');
});

test('Recieves a string with special characters and returns it reversed', () => {
  expect(reverseString('!test&')).toBe('&tset!');
});

test('Recieves a string with trailing spaces and returns it reversed with trailing spaces removed', () => {
  expect(reverseString('   test     ')).toBe('tset');
  expect(reverseString('   This is another test     ')).toBe('tset rehtona si sihT');
});

test('Recieves a non string input and throws an error', () => {
  expect(() => reverseString(5)).toThrow('Input must be of type String');
  expect(() => reverseString([])).toThrow('Input must be of type String');
  expect(() => reverseString({})).toThrow('Input must be of type String');
  expect(() => reverseString(undefined)).toThrow('Input must be of type String');
  expect(() => reverseString(null)).toThrow('Input must be of type String');
});
