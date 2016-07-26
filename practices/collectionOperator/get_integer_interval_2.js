'use strict';

function get_integer_interval_2(number_a, number_b) {
  let numArray = [];

  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      numArray.push(i);
    }
  } else if (number_a > number_b) {
    for (let i = number_a; i >= number_b; i--) {
      numArray.push(i);
    }
  } else {
    numArray.push(number_a);
  }

  return numArray.filter((item) => {
    return item % 2 === 0;
  });

}

module.exports = get_integer_interval_2;
