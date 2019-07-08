'use strict';

function collectSameElements(collectionA, collectionB) {
    let newArr = [];
      for (let i = 0; i < collectionA.length; i++) {
        for (let j = 0; j < collectionB.length; j++) {
          if(collectionB[j] === collectionA[i]){
            newArr.push(collectionB[j]);
          }
      }
     }
     return newArr;
}