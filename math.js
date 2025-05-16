// Square Root
function sqrt(x) {
  return Math.sqrt(x);
}

// Max
function max(a, b) {
  return Math.max(a, b);
}

// Addition
function add(a, b) {
  return a + b;
}

// Subtraction
function subtract(a, b) {
  return a - b;
}

// Multiplication
function multiply(a, b) {
  return a * b;
}

// Divide
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Export 
module.exports = { sqrt, max, add, subtract, multiply, divide };
