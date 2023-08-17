// START //

// Write tests for the following, and then make the tests pass

// ----------------------------------------------------------------------//

// 1. A capitalize function that takes a string and returns it with the first character capitalized.

export function capitalize(str) {
  const caps = str.charAt(0).toUpperCase() + str.slice(1);
  return caps;
}

// ----------------------------------------------------------------------//

// 2. A reverseString function that takes a string and returns it reversed.

export function reverseString(str) {
  const arr = str.split('');
  let arrReversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    arrReversed.push(arr[i]);
  }

  const reversedStr = arrReversed.join('');
  return reversedStr;
}

// ----------------------------------------------------------------------//

// 3. A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

// ----------------------------------------------------------------------//

// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.

const latinLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export function caesarCipher(str, shiftFactor) {
  const lowerCaseStr = str.toLowerCase();
  const letterList = latinLetters;
  let encryptedArr = [];

  // Push string indexes to array
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (/[a-zA-Z]/.test(lowerCaseStr[i])) {
      encryptedArr.push(lowerCaseStr[i]);
    } else {
      encryptedArr.push(' ');
    }
  }

  // Shift letters in array using shiftFactor and index-number from letter-array
  for (let j = 0; j < encryptedArr.length; j++) {
    const letterIndex = letterList.indexOf(encryptedArr[j]);
    const shiftedLetterIndex = letterIndex + shiftFactor;
    if (letterIndex === -1) {
      encryptedArr[j] = ' ';
    }
    if (shiftedLetterIndex > letterList.length - 1) {
      encryptedArr[j] =
        letterList[shiftedLetterIndex - (letterList.length - 1) - 1];
    } else if (letterIndex === -1) {
      encryptedArr[j] = ' ';
    } else {
      encryptedArr[j] = letterList[shiftedLetterIndex];
    }
  }

  // Convert shifted array indexes back into string
  const encryptedString = encryptedArr.join('');

  return encryptedString;
}
