'use strict';

/* Write a function that returns the Nth number in the fibonaci sequence */

//Recursive O(2n)
function fibonaci(num){
  if(num <=1) return 1;

  return fibonaci(num - 1) + fibonaci(num - 2);
};


//Loop O(n)
function simpleFibonaci(num){
  var a = 1, b = 0, temp;

  while(num >=0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

//Recuresive optimized
function optimizedFibonaci(num, hash){
  hash = hash || {};

  if(hash[num]) return hash[num];
  if(num <=1) return 1;

  return hash[num] = optimizedFibonaci(num - 1, hash) + optimizedFibonaci(num - 2, hash);
}
