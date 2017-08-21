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

var allUniqueChars = function(string) {

  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

var test = '38456hgf8';
console.log(allUniqueChars(test));
console.log(isUnqiue(test));
