import handleError from './error';

const calcAverage = (arr) => {
  const total = arr.reduce((prev, curr) => prev + curr, 0);
  const average = total / arr.length;

  if (average % 1 !== 0) return parseFloat(average.toFixed(2));

  return average;
};

const calcMin = (arr) => {
  let min = arr[0];
  arr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });

  return min;
};

const calcMax = (arr) => {
  let max = arr[0];
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });

  return max;
};

const checkInputs = (arr) => {
  arr.forEach((item) => {
    if (typeof item !== 'number') throw new Error(handleError('every item in array must be a number'));
  });
};

const analyzeArray = (arr) => {
  checkInputs(arr);
  if (arr.length === 0) {
    const obj = {
      average: null,
      min: null,
      max: null,
      length: 0,
    };

    return obj;
  }
  const obj = {
    average: calcAverage(arr),
    min: calcMin(arr),
    max: calcMax(arr),
    length: arr.length,
  };

  return obj;
};

export default analyzeArray;
