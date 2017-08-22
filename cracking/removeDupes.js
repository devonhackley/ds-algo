'use strict';

//Cracking the Coding Interview: Removing Duplicates

function removeDuplicates(list){
  let current = list.head;
  let hash = {};
  while(current){
    let runner = current;
    if(runner.next.val === current.val){
      runner.next = runner.next.next;
    } else {
      current = current.next;
      prev = prev.next;
    }
  }
  return;
}

const Node = function(val){
  this.val = val;
  this.previous = null;
  this.next = null;
}

const LinkedList = function(){
  var length = 0;
  var head = null;
  var tail = null;
}

LinkedList.prototype.add = function(val){
  var node = new Node(val);
  if(!this.head){
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
}




var newList = new LinkedList();
newList.add(2);
newList.add(3);
newList.add(4);
newList.add(5);
newList.add(2)
newList.add(6);
newList.add(7);
newList.add(5);
newList.add(2);


removeDuplicates(newList)
console.log(newList);
