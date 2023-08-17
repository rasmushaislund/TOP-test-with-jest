// START //

import { capitalize, reverseString, calculator } from './test-cases';

// Test-case 1 //

test.skip('first letter is capitalized', () => {
  expect(capitalize('stringssss')).toMatch(/^[A-Z]/);
});

// ----------------------------- //

// Test-case 2

test.skip('string is reversed', () => {
  expect(reverseString('reversed')).toMatch('desrever');
});

// ----------------------------- //

// Test-case 3

test('can calculator calculate?', () => {
  expect(calculator.add(2, 2)).toEqual(4);
  expect(calculator.subtract(2, 8)).toEqual(-6);
  expect(calculator.multiply(3, 5)).toEqual(15);
  expect(calculator.divide(100, 5)).toEqual(20);
});

// ----------------------------- //

// Test-case 4
