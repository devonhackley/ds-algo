'use strict';

const Person = function(opts) {
  this.name = opts.name;
  this.age = opts.age;
};

var friends = [
  {
    name: 'John',
    age: '30'
  },
  {
    name:'Ben',
    age: '24'
  },
  {
    name: 'Ana',
    age: '20'
  }
];

function comparePerson(a,b){
  if(a.age < b.age){
    return -1;
  }
  if (a.age > b.age){
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));
