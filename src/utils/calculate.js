import { countFractiondigit } from './';

const calculate = (num1String, num2String, operation) => {
  let returnValue = 0;
  const num1 = parseFloat(num1String);
  const num2 = parseFloat(num2String);
  const fractionDigit1 = countFractiondigit(num1);
  const fractionDigit2 = countFractiondigit(num2);
  switch (operation) {
    case '+':
      returnValue = num2 + num1;
      returnValue = returnValue.toFixed(
        fractionDigit1 > fractionDigit2 ? fractionDigit1 : fractionDigit2
      );
      break;
    case '-':
      returnValue = num2 - num1;
      returnValue = returnValue.toFixed(
        fractionDigit1 > fractionDigit2 ? fractionDigit1 : fractionDigit2
      );
      break;
    case '/':
      returnValue = num2 / num1;
      returnValue = parseFloat(returnValue.toFixed(16)).toString();
      break;
    case 'X':
      returnValue = num2 * num1;
      returnValue = returnValue.toFixed(fractionDigit1 + fractionDigit2);
      break;
    default:
      break;
  }
  return returnValue;
};

export default calculate;
