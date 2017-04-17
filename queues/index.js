'use strict';

const Queue = module.exports = function(){

  var items = [];

  this.enqueue = (element) => {
    items.push(element);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.front = () => {
    return items[0];
  };

  this.isEmpty = () => {
    return items.length == 0
  };

  this.size = () => {
    return items.length;
  };

  this.print = () => {
    console.log(items.toString());
  };

}
