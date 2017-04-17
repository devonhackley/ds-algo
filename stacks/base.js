'use strict';

const Stack = require('./index.js');
function baseConverter(decNumber, base){

  var remStack = new Stack();
  var rem, baseString = '';
  var digits = '0123456789ABCDEF';

  while (decNumber > 0){
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/base);
  };

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()];
  };

  return baseString;
};

console.log(baseConverter(100345,2));
console.log(baseConverter(100345,8));
console.log(baseConverter(100345,16));
