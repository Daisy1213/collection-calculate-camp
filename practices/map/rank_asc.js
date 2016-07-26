'use strict';
var rank_asc = function(collection){
  collection.sort((a, b) => {
    return b - a;
  })
  return collection
};

module.exports = rank_asc;
