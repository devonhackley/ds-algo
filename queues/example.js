'use strict';

const Queue = require('./index.js')

var queue = new Queue()
console.log(queue.isEmpty());

queue.enqueue('Jack')
queue.enqueue('Jill')
queue.enqueue('Suzie')

queue.print()
console.log(queue.size())
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue()
queue.print()
