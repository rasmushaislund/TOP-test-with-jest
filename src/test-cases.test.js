// START //

import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './test-cases';

// Test-case 1 //

test('first letter is capitalized', () => {
  expect(capitalize('stringssss')).toMatch(/^[A-Z]/);
});

// ----------------------------- //

// Test-case 2

test('string is reversed', () => {
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

test('Caesar cipher encryptor', () => {
  // Test wrapping
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toMatch(
    'bcdefghijklmnopqrstuvwxyza'
  );

  // Test for keeping the same case
  expect(caesarCipher('ABCdefg', 2)).toMatch('cdefghi');

  // Test for keeping spaces
  expect(caesarCipher('defend the east wall of the castle', 1)).toMatch(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );

  // Test for ignoring punctuation
  expect(caesarCipher('defend.the-east:wall;of,the-castle', 1)).toMatch(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});

// ----------------------------- //

// Test-case 5

test('analyze array and return avg., min., max., and length', () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(arr).average).toEqual(4);
  expect(analyzeArray(arr).min).toEqual(1);
  expect(analyzeArray(arr).max).toEqual(8);
  expect(analyzeArray(arr).length).toEqual(6);
});
