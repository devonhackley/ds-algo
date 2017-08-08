'use strict';

/* Factorial with recursion */

const computeFactorial = function(num){
  if(num === 1){
    return 1;
  }
  return num * computeFactorial(num - 1);
}

console.log(computeFactorial(4));
