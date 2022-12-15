function stringLength(str) {
  if (0 < str.length && str.length < 11) {
    return str.length;
  } else if (str.length < 1) {
    throw new Error('The length of the string is less than 1');
  } else {
    throw new Error('The length of the string is greater than 10');
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

class Calculator{
  add = (a, b) => {
    
    if (typeof a !== 'number') throw new Error('The first addend is not a Number ');

    if (typeof b !== 'number') throw new Error('The second addend is not a Number ');

    return a + b;
  }

  subtract = (a, b) => {
    if (typeof a !== 'number') throw new Error('The minuend is not a Number ');

    if (typeof b !== 'number') throw new Error('The subtrahend is not a Number ');

    return a - b;
  }

  multiply = (a, b) => {
    if (typeof a !== 'number') throw new Error('The first factor is not a Number ');

    if (typeof b !== 'number') throw new Error('The second factor is not a Number ');

    return a * b;
  }

  divide = (a, b) => {
    if (b === 0) throw new Error('We can\'t divide by zero');

    if (typeof a !== 'number') throw new Error('The dividend is not a Number ');

    if (typeof b !== 'number') throw new Error('The divisor is not a Number ');

    return a / b;
  }
}

function capitalize(str) {
  if (typeof str !== 'string') throw new Error('The parameter isn\'t a string');

  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize
}

