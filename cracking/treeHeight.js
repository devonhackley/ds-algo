'use strict';

// Coding Challenge: Height of a Binary Tree;

const Node = function(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

const Tree = function(){
  this.root = null;
}

Tree.prototype.add = function(data){
  // if(!this.root) return new Node(value);
  // let current = this.root;
  // let newNode = new Node(value);
  // while(current){
  //   if(value < current.data){
  //     if(!currentNode.left){
  //       currentNode.left = newNode;
  //       break;
  //     }
  //     else{
  //       currentNode = currentNode.left;
  //     }
  //   }
  //   else {
  //     if(!currentNode.right){
  //       currentNode.right = newNode;
  //       break;
  //     }
  //     else{
  //       currentNode = currentNode.right;
  //     }
  //   }
  // }
  var node = new Node(data);
  if(!this.root) {
    this.root = node;
  } else {
    var current = this.root;
    while(current) {
      if(node.data < current.data) {
        if(!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.data > current.data) {
        if(!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
}

var getHeight = function(node){
  if(node === null) {
    return -1;
  };

  return 1 + Math.max(getHeight(left), getHeight(right));
}

var bst = new Tree();
var root = bst.add(12);
bst.add(1);
bst.add(2);
console.log('whyyyyy',bst.add(3));
bst.add(4);
bst.add(5);
bst.add(6);
bst.add(16);
console.log(bst);

console.log(getHeight(root));
