'use strict';

//Coding Challenge: Return Kth to Last O(n), recursive
const Node  = function(val){
  this.val = val;
  this.next = null;
}

const LinkedList = function(){
  this.head = null;
}

function returnK(list, k){
  let current = list.head;
  let counter = 0;

  if(!current) return 0;

  counter = (returnK(current.next, k)) + 1;

  if(counter === k){
    console.log(k +'th to the last place is ' + counter);
  }
  console.log(counter);
  return counter;
}

//Test

var temp = new LinkedList();
var node1 = new Node(2);
var node2 = new Node(3);
var node3 = new Node(4);
var node4 = new Node(6);


temp.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(returnK(temp,3));
