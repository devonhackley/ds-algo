'use strict';
const Stack = require('./index.js');
function divdeBy2(decNumber){

  var remStack = new Stack();
  var rem, binaryString = '';

  while (decNumber > 0){
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/2);
  };

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString();
  };

  return binaryString;
};

console.log(divdeBy2(22));
console.log(divdeBy2(10));
console.log(divdeBy2(333));
