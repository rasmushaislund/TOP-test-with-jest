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
