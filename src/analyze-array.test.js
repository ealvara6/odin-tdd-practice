import analyzeArray from './analyze-array';

test('Recieves array of numbers and returns an object with the info of the total', () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([3, 4, 2])).toEqual({
    average: 3,
    min: 2,
    max: 4,
    length: 3,
  });
  expect(analyzeArray([-1, 2, 3])).toEqual({
    average: 1.33,
    min: -1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([3.124159, 8, 10, 20, 50])).toEqual({
    average: 18.22,
    min: 3.124159,
    max: 50,
    length: 5,
  });
});

test('check empty array', () => {
  expect(analyzeArray([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test('Check if every item in array is a number', () => {
  expect(() => analyzeArray(['test', 3, null, undefined])).toThrow('every item in array must be a number');
});
