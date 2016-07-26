'use strict';

function get_union(collection_a, collection_b) {
  let array = collection_a.concat(collection_b);
  let result = [];
  array.forEach((item) => {
    let exist = result.find((element) => {
      return element === item;
    })
    if(!exist){
      result.push(item);
    }
  })

  return result;
}


module.exports = get_union;

