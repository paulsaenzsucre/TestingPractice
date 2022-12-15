const myFunctions = require('./main');

test('length of \"Hello!\" is equal to 6', () => {
  expect(myFunctions.stringLength('Hello!')).toStrictEqual(6);
});

test('length of \"\" throws error', () => {
  expect(() => myFunctions.stringLength('')).toThrow();
});

test('reverse string of \"Oklahoma\" is equal to \"amohalkO\"', () => {
  expect(myFunctions.reverseString('Oklahoma')).toStrictEqual('amohalkO');
});

describe('Calculator.add', () => {
  test('adds \'5\' + 6 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.add('5', 6)).toThrow();
  });

  test('adds 5 + \'6\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.add(5, '6')).toThrow();
  });

  test('adds 5 + 6 is equal to 11', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.add(5, 6)).toStrictEqual(11);
  });
});

describe('Calculator.subtract', () => {
  test('subtract \'5\' - 6 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.subtract('5', 6)).toThrow();
  });

  test('subtract 5 - \'6\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.subtract(5, '6')).toThrow();
  });

  test('subtract 5 - 6 is equal to -1', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.subtract(5, 6)).toStrictEqual(-1);
  });
});

describe('Calculator.multiply', () => {
  test('multiply \'5\' * 6 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.multiply('5', 6)).toThrow();
  });

  test('multiply 5 * \'6\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.multiply(5, '6')).toThrow();
  });

  test('multiply 5 * 6 is equal to 30', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.multiply(5, 6)).toStrictEqual(30);
  });
});

describe('Calculator.divide', () => {
  test('divide \'30\' / 6 throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.divide('30', 6)).toThrow();
  });

  test('divide 30 / \'6\' throw error', () => {
    const calculator = new myFunctions.Calculator();
    expect(() => calculator.divide(30, '6')).toThrow();
  });

  test('divide 30 / 6 is equal to 5', () => {
    const calculator = new myFunctions.Calculator();
    expect(calculator.divide(30, 6)).toStrictEqual(5);
  });
});

describe('Capitalize test', () => {
  test('capitalize(5345) throw error', () => {
    expect(() => myFunctions.capitalize(5345)).toThrow();
  })

  test('capitalize(\'amazing\' is equal to \'Amazing\'', () => {
    expect(myFunctions.capitalize('amazing')).toStrictEqual('Amazing');
  });
});
