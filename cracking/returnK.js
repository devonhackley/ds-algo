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

  let current = list.head; //first pointer

  if(!current) return 0; //base case if head is null

  //Moving first pointer by k amount
  while(k > 0){
    current = current.next;
    k--;
  }


  let nextNode = head; //second pointer

  // Move both pointers together, when the first is at the end, the second pointer will be the kth node
  while(!current){
    current = current.next;
    nextNode = nextNode.next;
  }

  let value = nextNode.val;
  return value;
}

//Test

var temp = new LinkedList();
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);


temp.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
// console.log(temp.head);
// console.log(temp.head.next);
console.log(returnK(temp,3));
