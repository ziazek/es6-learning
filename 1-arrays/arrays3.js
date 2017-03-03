// create an array of numbers
var numbers = [1, 2, 3, 4, 5]

var sum = 0;

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

// print the sum variable
sum;