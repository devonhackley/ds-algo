'use strict';

const Stack = require('./index.js');

function reverseSet(arr){
  var newStack = new Stack();
  for(var i = 0; i< arr.length; i++;){
    newStack.push(arr[i]);
  }
  for(var i =0; i<newStack.size; i++;){
    console.log(newStack.pop(newStack[i]))
  }
}

let nums = [1,2,3,4,5];
reverseSet(nums);
