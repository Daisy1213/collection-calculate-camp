'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  return collection.reduce((a, b) => {
    if(a >= b){
      return a;
    }else{
      return b;
    }
  })
}

module.exports = collect_max_number;
