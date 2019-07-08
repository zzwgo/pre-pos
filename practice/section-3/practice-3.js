'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var c = [];
  for (var i = 0; i < collectionA.length;) {
    let count = 0;
    for (var j = 0; j < collectionA.length; j++) {
      if (collectionA[i] === collectionA[j]) {
        count++;
      }
    }
    c.push({
      key: collectionA[i],
      count: count
    })
    i += count;
  }

  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < objectB.value.length; j++) {
      if (c[i].key === objectB.value[j]) {
        c[i].count = c[i].count - Math.floor(c[i].count / 3);
      }
    }

  }
  return c;
}
