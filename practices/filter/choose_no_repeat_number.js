'use strict';

function choose_no_repeat_number(collection) {
  let array = [];

  for(let item of collection) {
    let exist =  array.find((element) => {
      return item === element;
    });
    if (!exist) {
      array.push(item);
    }
  }

  return array;
}

module.exports = choose_no_repeat_number;
