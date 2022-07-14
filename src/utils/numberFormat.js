const numberFormat = (numberString) => {
  let returnValue = '';
  let floatingNumber = false;
  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    if (digit === '.') floatingNumber = true;
    if (i % 3 === 0 && i !== 0 && !floatingNumber) returnValue += ',';
    returnValue += digit;
  }
  return returnValue;
};

export default numberFormat;
