var calculator = require('../lib/index');
var a=10, b=5;
test('Addition', () => {
  expect(calculator.add(a,b)).toBe(15);
});
test('Subtraction', () => {
  expect(calculator.subtract(a,b)).toBe(5);
});
test('Multiplication', () => {
  expect(calculator.multiply(a,b)).toBe(50);
});


