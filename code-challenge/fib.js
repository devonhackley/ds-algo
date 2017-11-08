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
