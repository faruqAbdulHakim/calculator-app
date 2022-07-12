import React from 'react';
import { Topbar } from './components';

function CalculatorApp() {
  const [theme, setTheme] = React.useState(0);

  const themeChangeHandler = (themeNum) => {
    if ([0, 1, 2].includes(themeNum)) setTheme(themeNum);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center transition-colors duration-500"
      style={{
        backgroundColor:
          theme === 0
            ? 'rgb(59,70,100)'
            : theme === 1
            ? 'rgb(230,230,230)'
            : `rgb(23,6,42)`,
      }}
    >
      <div className="w-full max-w-md p-6">
        <Topbar theme={theme} onThemeChange={themeChangeHandler} />
      </div>
    </div>
  );
}

export default CalculatorApp;
