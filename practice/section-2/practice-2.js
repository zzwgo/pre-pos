'use strict';

function countSameElements(collection) {
  // .
  var arr = []; 
  var result = [];
  for(let i of collection){
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
  result.push(arr[n]);
}
  return result;
}


