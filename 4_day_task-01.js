//How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
//The _.isEqual() function takes the element from the list of one array and searches it in the other array.
console.log( _.isEqual(obj1,obj2));
//If that property is found with the same value in the other array then it just goes on to checks the other property otherwise it just returns false.