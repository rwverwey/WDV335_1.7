const { sqrt, max, add, subtract, multiply, divide } = require('./math');

// Test for square root
test('calculates the square root of a number', () => {
  expect(sqrt(25)).toBe(5);
});

// Test for maximum value
test('returns the max of two numbers', () => {
  expect(max(4, 9)).toBe(9);
});

// Test for addition
test('adds two numbers', () => {
  expect(add(6, 7)).toBe(13);
});

// Test for subtraction
test('subtracts the second number from the first', () => {
  expect(subtract(10, 3)).toBe(7);
});

// Test for multiplication
test('multiplies two numbers', () => {
  expect(multiply(4, 5)).toBe(20);
});

// Test for division
test('divides the first number by the second', () => {
  expect(divide(20, 4)).toBe(5);
});

// Test for divide by zero
test('throws error when dividing by zero', () => {
  expect(() => divide(8, 0)).toThrow("Cannot divide by zero");
});
