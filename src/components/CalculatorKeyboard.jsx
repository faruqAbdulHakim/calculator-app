import React from 'react';
import { Key } from './';
import { Keys, calculate } from '../utils';

function CalculatorKeyboard({ theme, calc, setCalc }) {
  const numButtonHandler = (event) => {
    const number = event.target.innerText;
    const prev = calc.num1;
    const newNumber =
      prev === '0' && number === '0'
        ? '0'
        : prev === '0' && number !== '0'
        ? number
        : prev + number;
    setCalc((previousState) => {
      return { ...previousState, num1: newNumber };
    });
  };

  const delButtonHandler = () => {
    const prev = calc.num1;
    const length = prev.length;
    if (prev === '0' && calc.operation) {
      setCalc({
        num1: calc.num2,
        num2: null,
        operation: null,
        negative: calc.num2.includes('-'),
      });
    } else {
      const newNumber =
        prev === '0' ? '0' : length === 1 ? '0' : prev.slice(0, length - 1);
      setCalc((previousState) => {
        return { ...previousState, num1: newNumber };
      });
    }
  };

  const floatHandler = () => {
    const prev = calc.num1;
    const newNumber = prev.includes('.') ? prev : prev + '.';
    setCalc((previousState) => {
      return { ...previousState, num1: newNumber };
    });
  };

  const operationHandler = (event) => {
    const operationType = event.target.innerText;
    if (operationType === '-' && calc.num1 === '0') {
      setCalc((previousState) => {
        return { ...previousState, negative: !calc.negative };
      });
    } else {
      if (calc.operation && calc.num1 !== '0') {
        const newNum2 = calculate(
          `${calc.negative ? '-' : ''}${calc.num1}`,
          calc.num2,
          calc.operation
        ).toString();
        setCalc({
          num1: '0',
          num2: newNum2,
          operation: operationType,
          negative: false,
        });
      } else if (calc.operation && calc.num1 === '0') {
        setCalc((previousState) => {
          return { ...previousState, operation: operationType };
        });
      } else {
        setCalc({
          num1: '0',
          num2: (calc.negative ? '-' : '') + calc.num1,
          operation: operationType,
          negative: false,
        });
      }
    }
  };

  const resetButtonHandler = () => {
    setCalc({
      num1: '0',
      num2: null,
      operation: null,
      negative: false,
    });
  };

  const calculateHandler = () => {
    const result = calculate(
      `${calc.negative ? '-' : ''}${calc.num1}`,
      calc.num2,
      calc.operation
    ).toString();
    setCalc({
      num1: result,
      num2: null,
      operation: null,
      negative: false,
    });
  };

  return (
    <div
      className="grid grid-cols-4 rounded-md p-4 gap-3 sm:p-6 sm:gap-5"
      style={{
        backgroundColor:
          theme === 0
            ? 'rgb(37,45,68)'
            : theme === 1
            ? 'rgb(211,205,205)'
            : 'rgb(30,8,55)',
      }}
    >
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        7
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        8
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        9
      </Key>
      <Key theme={theme} type={Keys.type2} onClick={delButtonHandler}>
        Del
      </Key>

      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        4
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        5
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        6
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={operationHandler}>
        +
      </Key>

      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        1
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        2
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        3
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={operationHandler}>
        -
      </Key>

      <Key theme={theme} type={Keys.type1} onClick={floatHandler}>
        .
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={numButtonHandler}>
        0
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={operationHandler}>
        /
      </Key>
      <Key theme={theme} type={Keys.type1} onClick={operationHandler}>
        x
      </Key>

      <div className="col-span-2 grid">
        <Key theme={theme} type={Keys.type2} onClick={resetButtonHandler}>
          Reset
        </Key>
      </div>
      <div className="col-span-2 grid">
        <Key theme={theme} type={Keys.type3} onClick={calculateHandler}>
          =
        </Key>
      </div>
    </div>
  );
}

export default CalculatorKeyboard;
