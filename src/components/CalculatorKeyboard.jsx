import React from 'react';
import { Key } from './';
import { Keys } from '../utils';

function CalculatorKeyboard({ theme }) {
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
      <Key theme={theme} type={Keys.type1}>
        7
      </Key>
      <Key theme={theme} type={Keys.type1}>
        8
      </Key>
      <Key theme={theme} type={Keys.type1}>
        9
      </Key>
      <Key theme={theme} type={Keys.type2}>
        Del
      </Key>

      <Key theme={theme} type={Keys.type1}>
        4
      </Key>
      <Key theme={theme} type={Keys.type1}>
        5
      </Key>
      <Key theme={theme} type={Keys.type1}>
        6
      </Key>
      <Key theme={theme} type={Keys.type1}>
        +
      </Key>

      <Key theme={theme} type={Keys.type1}>
        1
      </Key>
      <Key theme={theme} type={Keys.type1}>
        2
      </Key>
      <Key theme={theme} type={Keys.type1}>
        3
      </Key>
      <Key theme={theme} type={Keys.type1}>
        -
      </Key>

      <Key theme={theme} type={Keys.type1}>
        .
      </Key>
      <Key theme={theme} type={Keys.type1}>
        0
      </Key>
      <Key theme={theme} type={Keys.type1}>
        /
      </Key>
      <Key theme={theme} type={Keys.type1}>
        x
      </Key>

      <div className="col-span-2 grid">
        <Key theme={theme} type={Keys.type2}>
          Reset
        </Key>
      </div>
      <div className="col-span-2 grid">
        <Key theme={theme} type={Keys.type3}>
          =
        </Key>
      </div>
    </div>
  );
}

export default CalculatorKeyboard;
