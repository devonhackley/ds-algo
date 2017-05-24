'use strict';

const Node = function(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

const Tree = function(data){
  var node = new Node(data);
  this._root = node;
}

Tree.prototype.appendChild = function(node){
  if(!(node instanceof Node))
    throw new Error('node must be type of Node')
  this._root.children.push(node)
}

Tree.prototype.traveseDF = function(callback){
  (recurse(currentNode) => {
    for(var i=0, length = currentNode.children.length; i < length; i++){
      recurse(currentNode.children[i]);
    }
    callback(currentNode);
  })(this._root);
}

Tree.prototype.prettyPrint = function(){
  let result = '';

  let queue = []

  let breadthFirstTraverse = () => {
    let next = queue.pop()
    if(!next) return
    result += next._root.data + ' '
    next._root.children.forEach( child => queue.unshift(child))
    breadthFirstTraverse()
  }
  breadthFirstTraverse()
  console.log(result);
  return result;  
}


var tree = new Tree('one');

tree.appendChild(new Node('two'));
tree._root.children[0].parent = tree;

tree.appendChild(new Node('three'));
tree._root.children[1].parent = tree;

tree.appendChild(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];


tree.traverseDF(function(node) {
    console.log(node.data)
});
