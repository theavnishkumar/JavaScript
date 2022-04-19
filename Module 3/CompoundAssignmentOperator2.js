// Just like arithmetic operators, binary logical operators can be used in combination with the assignment operator, creating a logical AND assignment &&= and a logical OR assignment ||=. 

let a=true;
console.log(a);
a&&=false;
console.log(a);

let b=false;
b&&=true;
console.log(b);
console.log("-------------");

let c=false;
console.log(c);

c=c||true;
console.log(c);

console.log("-------------");

let d=true;
console.log(d);

d=d||alse;
console.log(d);
