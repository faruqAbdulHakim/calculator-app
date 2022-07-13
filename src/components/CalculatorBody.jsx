import React from 'react';
import { CalculatorScreen, CalculatorKeyboard } from './';

function CalculatorBody({ theme }) {
  return (
    <div className="space-y-4">
      <CalculatorScreen theme={theme} />
      <CalculatorKeyboard theme={theme} />
    </div>
  );
}

export default CalculatorBody;
