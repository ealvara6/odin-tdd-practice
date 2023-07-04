import handleError from './error';

const capitalize = (string) => {
  if (typeof string !== 'string') throw new Error(handleError('Input must be of type string'));
  if (!/^[A-Z]+$/i.test(string.charAt(0))) throw new Error(handleError('First letter must be a letter'));
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default capitalize;
