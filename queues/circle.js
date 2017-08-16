'use strict';

const CircleQueue = function(size){
  this.start = 0;
  this.length = size;
  this._size = 0;
  this.queue = [];

  this.increment = (data) => {
    return (data + 1) % this.length;
  }
}

CircleQueue.prototype.initialize = (size) => {
    var tempQueue = new Array(size);
    return tempQueue;
}

CircleQueue.prototype.enqueue = function(data){
  this._size++;
  var end = this.increment(this.start);
  this.queue[end] = data;
}

CircleQueue.prototype.dequeue = function(){
  
  return
}
