'use strict';

//Coding Challenge: Find max sum of subarray  O(n)

function maxSum(arr){
  let max = 0;
  let max_end = 0;

  for(var i=0; i < arr.length; i++){
    max_end = max_end + arr[i];
    if(max_end < 0){
      max_end = 0;
    }
    if(max < max_end){
      max = max_end
    }
  }

  return max_end;
}

var temp = [-2,-3,4,-1,-2,1,5,-3];
console.log(maxSum(temp));
