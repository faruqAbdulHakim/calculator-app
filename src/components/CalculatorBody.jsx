import React from 'react';
import { CalculatorScreen, CalculatorKeyboard } from './';

function CalculatorBody({ theme }) {
  const [calc, setCalc] = React.useState({
    num1: '0',
    num2: null,
    operation: null,
    negative: false,
  });

  return (
    <div className="space-y-4">
      <CalculatorScreen theme={theme} calc={calc} />
      <CalculatorKeyboard theme={theme} calc={calc} setCalc={setCalc} />
    </div>
  );
}

export default CalculatorBody;
