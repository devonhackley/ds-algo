'use strict';

/* Coding Challenge: Return true if the given string is a palindrome. Otherwise, return false. */


function palindrome(str) {

  var normalizedStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reverseStr = normalizedStr.split('').reverse().join('');
  return normalizedStr === reverseStr;

  

}



palindrome("eye");
