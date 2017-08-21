'use strict';


// Cracking the Coding Interview: isUnique 0(n)
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

var test = '23dgjt';
console.log(isUnqiue(test));
