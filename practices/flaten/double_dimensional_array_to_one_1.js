'use strict';

function double_to_one(collection) {

  //在这里写入代码
  let a1 = [];
  collection.forEach((item) => {
    if(item.length){
      item.forEach((element) => {
        a1.push(element);
      })
    }else{
      a1.push(item)
    }
  });
  return a1;
}

module.exports = double_to_one;
