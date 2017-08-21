'use strict';

function isUnqiue(str){
 let front = 0;
 let back = str.length - 1;
  while(back > front) {
    while(str[front] != undefined || str[back] != undefined){
      if(str[front] === str[back]){
        return false;
      }
      else {
        back--;
        front++;
      }
    }
  }
 return true;
}

var test = '38456hgf8';
console.log(isUnqiue(test));
