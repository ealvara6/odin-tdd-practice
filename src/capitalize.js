const capitalize = (string) => {
  console.log(typeof string);
  if (typeof string !== 'string') throw new Error('Input must be of type string');
  if (!/^[A-Z]+$/i.test(string.charAt(0))) throw new Error('First letter must be a letter');
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export default capitalize;
