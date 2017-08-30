'use strict';

// Coding Challenge: Tree --> Level Order Traversal


 function Node(val){
  this.data = val;
  this.left = null;
  this.right = null;
}

 function Tree(){
  this.root = null;
};

Tree.prototype.add = function(data) {
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
};



var levelOrder = function(node){
  if(!node) return 0;
  levelOrder(node.left);
  console.log(node.val);
  levelOrder(node.right);
}

var binarySearchTree = new Tree();
var root = binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);

console.log('hope it works',levelOrder(root));
