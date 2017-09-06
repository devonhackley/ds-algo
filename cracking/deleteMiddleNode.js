'use strict';


//Coding Challenge: Delete the middle node of the list



const Node  = function(val){
  this.val = val;
  this.next = null;
}

const LinkedList = function(){
  this.head = null;
}

function deleteNode(list,value){
  let currentNode = list.head;
    console.log('value', value);
  if(currentNode.val === value){
      console.log('here first');
      return list.head.next;
  }
  while(currentNode.next !== null){
    console.log('here second');
    if(currentNode.next.val === value){
      console.log('here third');
      currentNode.next = currentNode.next.next;
      return list.head;
    }
    currentNode = currentNode.next;
  }
  console.log('new list',list);
  return list;
}


function deleteMiddle(list){
  let current = list.head;
  let nextNode = current.next;

  while(!current.next){


  }
};



//Test
var beemp = new LinkedList();
var node11 = new Node(1);
var node12 = new Node(2);
var node13 = new Node(3);
var node14 = new Node(4);
var node15 = new Node(5);
var node16 = new Node(6);


beemp.head = node11;
node11.next = node12;
node12.next = node13;
node13.next = node14;
node14.next = node15;
node15.next = node16;

deleteNode(beemp, 3);
console.log('dasdasdas',beemp.head);
