'use strict';

const Queue = function(capacity){
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(value){
  if(this.count() < this.capacity){
    this.storage[this.tail++] = value;
    return this.count();
  }
  return 'Max capacity';
}

Queue.prototype.dequeue = function(){
  let element = this.storage[this.head];
  delete this.storage[this.head];
  if(this.head < this.tail) this.head++;
  return element;

}

Queue.prototype.count = function(){
  return this.tail - this.head;
}

let queue = new Queue(4);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue);
queue.dequeue(7);
console.log('new queu',queue);

// queue.dequeue();
// console.log('new que', queue);
