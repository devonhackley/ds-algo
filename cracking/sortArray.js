'use strict';

//Coding Challenge: sort an array in decreasing frequency




function sortArray(arr){
  let frequency = {};
  let newArr = [];

  for(var i = 0; i < arr.length; i++){
    var num = arr[i];
    (!frequency.hasOwnProperty(num)) ? frequency[num] = 1 : frequency[num]++;
  }
  for(var val in frequency){
    newArr.push(val);
  }
  console.log(frequency);
  console.log(newArr);
};

var temp = [6,2,3,3,4,1,5,5,3];

sortArray(temp);
