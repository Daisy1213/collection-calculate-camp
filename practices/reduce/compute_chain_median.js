'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let sortNumberArray = collection.split('->').sort((a, b) => a - b);

  if (sortNumberArray.length / 2 !== 0) {
    return sortNumberArray[sortNumberArray.length / 2];
  } else {
    return
  }
  return parseFloat((sortNumberArray[sortNumberArray.length / 2 - 1] + sortNumberArray[sortNumberArray.length / 2]) / 2);
}

module.exports = compute_chain_median;
