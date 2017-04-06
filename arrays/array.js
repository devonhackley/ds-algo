'use strict';

/* fibonacci sequence using arrays */

let fibonacci = [];

fibonacci[1] = 1;
fibonacci[2] = 2;

for(var i = 3; i< 20; i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
console.log(fibonacci);
