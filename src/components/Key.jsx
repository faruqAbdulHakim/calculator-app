import React from 'react';
import { Keys } from '../utils';

function Key({ children, theme, type, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-bold pt-2 pb-1 text-xl sm:text-2xl leading-normal rounded-md 
      tracking-wider active:scale-95 origin-bottom transition-colors
      uppercase bg-[color:var(--bg)] hover:bg-[color:var(--bg-onhover)]"
      style={
        theme === 0 && type === Keys.type1
          ? {
              '--bg-onhover': 'white',
              '--bg': 'rgb(234,227,219)',
              color: 'rgb(71,80,95)',
              boxShadow: `0 3px rgb(178,162,149)`,
            }
          : theme === 0 && type === Keys.type2
          ? {
              '--bg-onhover': 'rgb(161,179,225)',
              '--bg': 'rgb(100,114,153)',
              color: 'white',
              boxShadow: `0 3px rgb(63,77,114)`,
            }
          : theme === 0 && type === Keys.type3
          ? {
              '--bg-onhover': 'rgb(249,108,91)',
              '--bg': 'rgb(209,63,48)',
              color: 'white',
              boxShadow: `0 3px rgb(150,39,28)`,
            }
          : theme === 1 && type === Keys.type1
          ? {
              '--bg-onhover': 'white',
              '--bg': 'rgb(229,228,224)',
              color: 'rgb(45,46,40)',
              boxShadow: `0 3px rgb(166,158,147)`,
            }
          : theme === 1 && type === Keys.type2
          ? {
              '--bg-onhover': 'rgb(98,181,189)',
              '--bg': 'rgb(55,130,135)',
              color: 'white',
              boxShadow: `0 3px rgb(47,91,100)`,
            }
          : theme === 1 && type === Keys.type3
          ? {
              '--bg-onhover': 'rgb(255,139,56)',
              '--bg': 'rgb(200,84,1)',
              color: 'white',
              boxShadow: `0 3px rgb(126,65,21)`,
            }
          : theme === 2 && type === Keys.type1
          ? {
              '--bg-onhover': 'rgb(107,52,172)',
              '--bg': 'rgb(51,27,77)',
              color: 'rgb(252,230,95)',
              boxShadow: `0 3px rgb(133,28,157)`,
            }
          : theme === 2 && type === Keys.type2
          ? {
              '--bg-onhover': 'rgb(134,49,176)',
              '--bg': 'rgb(86,7,124)',
              color: 'white',
              boxShadow: `0 3px rgb(191,21,244)`,
            }
          : theme === 2 && type === Keys.type3
          ? {
              '--bg-onhover': 'rgb(148,255,249)',
              '--bg': 'rgb(0,222,207)',
              color: 'black',
              boxShadow: `0 3px rgb(136,235,240)`,
            }
          : {}
      }
    >
      {children}
    </button>
  );
}

export default Key;
