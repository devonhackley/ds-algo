'use strict';

  const Stack = module.exports = function() {
  var items = [];

  this.push = (element) => {
    items.push(element);
  };

  this.pop = (element) => {
    return items.pop();
  };

  this.peek = () => {
    return items[items.length-1];
  };

  this.isEmpty = () => {
    return items.length == 0;
  };

  this.size = () => {
    return items.length;
  };

  this.clear = () => {
    items = [];
  };

  this.print = () => {
    console.log(items.toString());
  };
};

var stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
stack.print();
stack.push(11);
stack.push(15);
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();

stack.pop();
stack.pop();
console.log(stack.size());
stack.print();
