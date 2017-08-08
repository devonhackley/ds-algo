'use strict';

const Node = function(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

const Tree = function(data){
  var node = new Node(data);
  this.root = node;
}
