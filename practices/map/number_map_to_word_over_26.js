'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map((item) => {
    if(item + 96 > 122) {
      return String.fromCharCode((item - 1) / 26 + 96) + String.fromCharCode((item - 1) % 26 + 97);
    }else{
      return String.fromCharCode(item + 96);
    }
  })
};

module.exports = number_map_to_word_over_26;
