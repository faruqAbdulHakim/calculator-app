import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import CalculatorApp from './CalculatorApp';

const root = createRoot(document.getElementById('root'));
root.render(<CalculatorApp />);
