const square = require('./square');

test('Gets the square of 3 and should be 9', () => {
  expect(square(3)).toBe(9);
});