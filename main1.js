// main.js

import { add, subtract, multiply, divide } from './calc.js';

const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  let output;

  switch (operation) {
    case 'add':
      output = add(num1, num2);
      break;
    case 'subtract':
      output = subtract(num1, num2);
      break;
    case 'multiply':
      output = multiply(num1, num2);
      break;
    case 'divide':
      output = divide(num1, num2);
      break;
    default:
      output = 'Invalid Operation';
  }

  result.textContent = `Result: ${output}`;
});


