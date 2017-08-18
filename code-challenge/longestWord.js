'use strict';

/* Coding Challenge: Return the length of the longest word in the provided sentence. */

function findLongestWord(str) {
  var longest = 0;
  str.split(' ').map(function(word){
    if(word.length > longest){
      longest = word.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
