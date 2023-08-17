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

test.skip('can calculator calculate?', () => {
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

  // Test for ignoring spaces
  expect(caesarCipher('defend the east wall of the castle', 1)).toMatch(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );

  // Test for ignoring punctuation
  expect(caesarCipher('defend.the-east:wall;of,the-castle', 1)).toMatch(
    'efgfoe uif fbtu xbmm pg uif dbtumf'
  );
});
