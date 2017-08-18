'use strict';

/* Coding Challenge: Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. */

function titleCase(str) {
  var lower = str.toLowerCase().split(' ');
  var result = lower.map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
  });

  return result.join(' ');

}

titleCase("I'm a little tea pot");
