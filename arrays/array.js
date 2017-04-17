'use strict';

/* fibonacci sequence using arrays */

let fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 2;

for(var i = 3; i< 20; i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);

/* Interating over arrays wil a function */

var isEven = function(x) {
  //returns true if x is a multiple of 2
  console.log(x);
  return (x % 2 == 0);
};
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

numbers.every(isEven); // every() runs through they entire array and returns false because the first index (1) is not even.

numbers.some(isEven); //some(), opposite of every(), runs until condition is true, i.e iterates thru 1 but stops at 2 because it is even.

numbers.forEach( (x) => {
  console.log((x % 2 == 0));
});
