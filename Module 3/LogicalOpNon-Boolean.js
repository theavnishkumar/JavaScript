let nr=0;
let year=1970;
let name="Alice";
let empty="";

console.log(!nr);
console.log(!year);
console.log(!name);
console.log(!empty);

console.log("----------");
console.log(!!nr);
console.log(!!name);

console.log(true&&1991);
console.log(false&&1991);
console.log(2&&5);
console.log(0&&5);
console.log("Alice"&&"Bob");
console.log(""&&"Bob");

console.log(true||1991);
console.log(false||1991);
console.log(2||5);
console.log("Alice"||"Bob");
console.log(""||"Bob");

// This is slightly different for binary logical operators (i.e. AND and OR). They don't return a Boolean value. In reality, they return its first or second operand. The AND operator will return the first operand if it evaluates to false, and the second operand otherwise. The OR operator will return its first operand if it evaluates to true, and the second operand otherwise.