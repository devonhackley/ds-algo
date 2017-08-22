'use strict';

// Cracking the Coding Interview: Permutation O(n) using hash table

function checkPerm(str1, str2){
  let s1 = str1.toLowerCase();
  let s2 = str2.toLowerCase();


  let strHash = {};
  for(var i = 0; i < s1.length; i++){
    var char = s1[i];
    (!strHash.hasOwnProperty(char)) ? strHash[char] = 1 : strHash[char]++;
  }

  for(var i = 0; i < s2.length; i++ ){
    if(!strHash.hasOwnProperty(s2[i])) {
      return false;
    }
    else{
      strHash[s2[i]]--
    }
  }

  for(var char in strHash){
    if(strHash[char] != 0){
      return false;
    }
  }
  return true;
}

var test1 = "abc";
var test2 = "cac";
console.log(checkPerm(test1, test2));
