const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  let numbers = arguments[0];
  return numbers.reduce(function(total, number) {
    return total += number;
  }, 0)
};

const multiply = function() {
  let numbers = arguments[0];
  return numbers.reduce(function(product, number) {
    return product *= number;
  }, 1)
};

const power = function() {
	let number = arguments[0];
  let power = arguments[1];
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function() {
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
