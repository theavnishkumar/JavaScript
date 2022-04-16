// The Slice method allows you to create a new array from selected elements of the original array. Calling the method does not effect the original array. The method takes either one or two integer values as arguments.

let names=["Olivia", "Emma", "Mateo", "Samuel"];

let n1=names.slice(2);
console.log("Slice 2: ",n1);

let n2=names.slice(1,3);
console.log("Slice 1,3: ",n2);

let n3=names.slice(0,-1);
console.log("Slice 0,-1: ",n3);

let n4=names.slice(-1);
console.log("Slice -1: ",n4);
``
console.log(names);