'use strict';

//Cracking the Coding Interview: Removing Duplicates

function removeDuplicates(list){
  let current = list.head;
  while(current){
    let runner = current;
    if(runner.next.val === current.val){
      runner.next = runner.next.next;
    }
  }
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

LinkedList.prototype.remove = function(val){
  var current = this.head;
  while(current){
    if(current.val === val){
      if(current === this.head && current === this.tail){
        this.head = null;
        this.tail = null;
      } else if(current === this.head){
        this.head = this.head.next;
        this.head.previous = null;
      } else if(current === this.tail){
        this.tail = this.tail.previous;
        this.tail.next = null;
      } else {
        current.previous.next = current.next;
        current.next.previous = current.previous;
      }
      this.length--;
    }
    current = current.next;
  }
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


console.log(removeDuplicates(newList));
