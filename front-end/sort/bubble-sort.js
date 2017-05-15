'use strict';
  function bubbleSort(nums){

  let sorted = false;

  while(!sorted){
    sorted = true;
    for(var i =0; i < nums.length - 1; i++){
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        sorted = false;
      }
    }
  }
  return nums;
}

let arr = [4,5,3,6,1,2];

console.log(bubbleSort(arr)); // [1,2,3,4,5,6]
