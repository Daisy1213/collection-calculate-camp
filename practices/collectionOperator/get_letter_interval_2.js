'use strict';

function get_letter_interval_2(number_a, number_b) {
  let array = [];
  let consult = 0;
  let remain = 0;
  if(number_a <= number_b){
    for(let i = number_a; i <= number_b; i++){

      if(i + 96 > 122){
        consult = (i - 1) / 26;
        remain = (i - 1) % 26;
        array.push(String.fromCharCode(consult + 96) + String.fromCharCode(remain + 97));
      }else{
        array.push(String.fromCharCode(i+96));
      }
    }
  }else{
    for(let i = number_a; i >= number_b; i--) {

      if (i + 96 > 122) {
        consult = (i - 1) / 26;
        remain = (i - 1) % 26;
        array.push(String.fromCharCode(consult + 96) + String.fromCharCode(remain + 97));
      } else {
        array.push(String.fromCharCode(i + 96));
      }
    }
  }
  return array;
}

module.exports = get_letter_interval_2;

