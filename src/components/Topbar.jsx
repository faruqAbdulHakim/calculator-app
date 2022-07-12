import React from 'react';

function Topbar({ theme, onThemeChange }) {
  return (
    <div
      className="flex justify-between items-center transition-colors duration-500"
      style={{
        color:
          theme === 0
            ? 'rgb(251,255,255)'
            : theme === 1
            ? 'rgb(45,46,40)'
            : 'rgb(252,230,95)',
      }}
    >
      <h1 className="font-bold text-2xl">calc</h1>
      <div className="flex items-end">
        <p className="uppercase font-semibold text-xs">theme</p>
        <div className="ml-6 flex flex-col">
          <ol className="flex justify-evenly space-x-3 px-1 text-xs">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ol>
          <button
            onClick={() => onThemeChange(theme + 1 > 2 ? 0 : theme + 1)}
            className="rounded-full w-14 py-1"
            style={{
              backgroundColor:
                theme === 0
                  ? 'rgb(37,45,68)'
                  : theme === 1
                  ? 'rgb(211,205,205)'
                  : 'rgb(30,8,55)',
            }}
          >
            <div
              className="w-1/3 transition-all duration-500"
              style={{
                marginLeft: `calc(${theme} * 100%/3)`,
              }}
            >
              <div
                className="h-3 w-3 rounded-full transition-all mx-auto"
                style={{
                  backgroundColor:
                    theme === 0
                      ? 'rgb(248,108,93)'
                      : theme === 1
                      ? 'rgb(248,142,58)'
                      : 'rgb(137,248,242)',
                }}
              ></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
