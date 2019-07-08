'use strict';

function countSameElements(collection) {
  var arr = []; 
  var result = [];
  for(let i of collection){
    if(!arr[i]){
      arr[i]={};
      arr[i].key = i;
      arr[i].count = 1;
    } else{
      arr[i].count++;
    }
  }

for(let n in arr){
  result.push(arr[n]);
}
  return result;
}
