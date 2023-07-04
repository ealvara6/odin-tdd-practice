import handleError from './error';

const cipherLetter = (letter, shift) => {
  let asciiCode = letter.charCodeAt(0);

  for (let i = shift; i > 0; i -= 1) {
    if (asciiCode === 122 && shift !== 0) asciiCode = 96;
    if (asciiCode === 90 && shift !== 0) asciiCode = 64;

    asciiCode += 1;
  }

  return String.fromCharCode(asciiCode);
};

const checkErrors = (string, shift) => {
  if (typeof string !== 'string') throw new Error('first input must be a string');
  if (typeof shift !== 'number') throw new Error('second input must be a number');
};

const caesarCipher = (string, shift) => {
  checkErrors(string, shift);

  const regex = /^[A-Z]+$/i;
  let tempString = '';
  const stringArr = string.split('');

  while (stringArr.length !== 0) {
    const tempChar = stringArr.shift();
    if (!regex.test(tempChar)) tempString += tempChar;
    else tempString += cipherLetter(tempChar, shift);
  }

  return tempString;
};

export default caesarCipher;
