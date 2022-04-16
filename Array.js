let days=["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);
console.log(days[2]);
console.log(days[5]);

days[0]="Sunday";
console.log(days[0]);

let emptyArray=[];
console.log(emptyArray[0]);

// we can strore different types of elements in array
let values=["Test", 7, 12.3, false];
console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
console.log(values[3]);

let names=[["Olivia", "Emma", "Sofia"],["William", "James", "Danniel"]];
console.log(names[0]);
console.log(names[0][1]);
console.log(names[1][1]);

let femaleNames=names[0];
console.log("Female Name 1: ",femaleNames[0]);
console.log("Female Name 2: ",femaleNames[1]);
console.log("Female Name 3: ",femaleNames[2]);