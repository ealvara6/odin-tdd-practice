import handleError from './error';

const reverseString = (string) => {
  if (typeof string !== 'string') throw new Error(handleError('Input must be of type String'));

  const tempString = string.trim().split('');
  let stringReversed = '';

  while (tempString.length !== 0) {
    stringReversed += tempString.pop();
  }

  return stringReversed;
};

export default reverseString;
