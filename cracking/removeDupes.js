'use strict';

//Cracking the Coding Interview: Removing Duplicates 0(n) with extra data struc

function removeDuplicates(list){
  let current = list.head;
  let nextNode = current.next;
  let nodes = {};

  nodes[current.val] = 1;

  while(nextNode){
    let data = nextNode.val;
    if(nodes[data]){
      console.log(current.val);
      current.next = nextNode.next;
    }else {
      nodes[data] = 1;
      current = nextNode;
    }
    nextNode = nextNode.next;
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
}

LinkedList.prototype.add = function(val){
  var node = new Node(val);
  if(!this.head){
    this.head = node;
  } else {
    node.next = this.head;
    this.head = node;
  }
  this.length+=1;

}




var blueList = new LinkedList();
blueList.add(1);
blueList.add(1);
blueList.add(4);
blueList.add(5);
blueList.add(6);
blueList.add(6);



console.log('beforeee',blueList);
removeDuplicates(blueList)
console.log('after', blueList);
