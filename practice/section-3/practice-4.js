'use strict';

function createUpdatedCollection(collectionA, objectB) {

  var arr = []; 
  var c = [];
  for(let i of collectionA){
    if(i.indexOf("-")!=-1){
      arr[i.substring(0,i.indexOf("-"))]={};
      arr[i.substring(0,i.indexOf("-"))].key = i.substring(0,i.indexOf("-"));
      arr[i.substring(0,i.indexOf("-"))].count = parseInt(i.substring(i.indexOf("-")+1,i.length));
    }else if(!arr[i]){
      arr[i]={};
      arr[i].key = i;
      arr[i].count = 1;
    } else{
      arr[i].count++;
    }
  }

for(let n in arr){
  c.push(arr[n]);
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
