import { numberFormat } from '../utils';

function CalculatorScreen({ theme, calc }) {
  return (
    <div
      className="rounded-md p-6 transition-colors duration-500"
      style={{
        backgroundColor:
          theme === 0
            ? 'rgb(24,31,50)'
            : theme === 1
            ? 'rgb(238,238,238)'
            : 'rgb(30,8,55)',
        color:
          theme === 0
            ? 'white'
            : theme === 1
            ? 'rgb(45,46,40)'
            : 'rgb(252,230,95)',
      }}
    >
      <p>
        {calc.num2 || '0'} {calc.operation}
      </p>
      <p className="text-right text-3xl font-bold transition-colors duration-500">
        {calc.negative && '- '}
        {numberFormat(calc.num1)}
      </p>
    </div>
  );
}

export default CalculatorScreen;
