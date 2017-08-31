'use strict';

//Coding Challenge: Reverse a given string;


function reverseStr(str){
  return str.split(' ').reverse().join(' ');
};

var temp = 'The sky is Blue';

console.log(reverseStr(temp));
