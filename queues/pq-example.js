'use strict';

const PriorityQueue = require('./p-queue.js')

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('John', 2)
priorityQueue.enqueue('Jack', 1)
priorityQueue.enqueue('Camila', 1)
priorityQueue.print()
