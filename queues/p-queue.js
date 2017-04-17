'use strict';

require('./index.js');
const PriorityQueue = module.exports = function(){

  var items = []

  var QueueElement = function(element, priority){
    this.element = element
    this.priority = priority
  }

  this.enqueue = (element, priority) => {
    var queueElement = new QueueElement(element, priority);

    if (this.isEmpty()){
      items.push(queueElement)
    } else {
      var added = false;
      items.forEach(queueElement => {
        if(queueElement.priority < items.priority){
          items.splice(item,0,queueElement);
          added = true;
        }
      });

      if(!added){
        items.push(queueElement)
      }

    }
  }
}
