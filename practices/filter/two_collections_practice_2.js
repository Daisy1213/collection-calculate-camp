'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let array1 = [];
  let array2 = [];
  let sameArray = collection_a.filter((item) => {
    return collection_b.find((element) => {
      return item === element;
    })
  });

  collection_a.forEach((item) => {
    let exist = sameArray.find((element) => {
      return element === item;
    });
    if (!exist) {
      array1.push(item);
    }
  });

  collection_b.forEach((item) => {
    let exist = sameArray.find((element) => {
      return element === item;
    });
    if (!exist) {
      array2.push(item);
    }
  });
  return array1.concat(array2);

}

module.exports = choose_no_common_elements;




