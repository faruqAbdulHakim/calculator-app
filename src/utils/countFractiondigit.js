const countFractiondigit = (number) => {
  let total = 0;
  let isFloat = false;
  for (const c of number.toString()) {
    if (isFloat) total += 1;
    if (c === '.') isFloat = true;
  }
  return total;
};

export default countFractiondigit;
