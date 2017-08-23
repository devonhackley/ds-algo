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

Tree.prototype.add = function(value){
  if(!this.root) return new Node(value);
  let current = this.root;
  let newNode = new Node(value);
  while(current){
    if(value < current.data){
      (!current.left) ? current.left = newNode : current = current.left;
      (!current.right) ? current.right = newNode : current = current.right;
    }
  }
}
Tree.prototype.getHeight = function(node){
  if(!node) return 0;
  let left = getHeight(node.left);
  let right = getHeight(node.right);

  return Math.max(left, right) + 1;
}

var bst = new Tree();
bst.add(2);
bst.add(3);
bst.add(4);
bst.add(6);
bst.add(12);

console.log(bst.getHeight(bst.root));
