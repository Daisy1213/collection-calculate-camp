'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let array = [];
  let a1 = [];

  collection.forEach((item) => {
    item.forEach((itema) => {
      a1.push(itema);
    })
  });

  a1.forEach((item) => {
    let exist = array.find((itemb) => {
      return item === itemb;
    })
    if(!exist) {
      array.push(item)
      }
    });


  return array;

}

module.exports = double_to_one;
