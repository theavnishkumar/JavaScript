// To check if the operands are equal, we can use either the identity (strict equality) operator === or the equality operator ==.
console.log("=== Operator:")
console.log(10===5);
console.log(10===10);
console.log(10===10n);
console.log(10==="10");
console.log("10"==="10");
console.log("Alice"==="Bob");
console.log(0===false);
console.log(undefined===false);

console.log("== Operator:");
console.log(10==5);
console.log(10==10);
console.log(10==10n);
console.log(10=="10");
console.log("10"=="10");
console.log("Alice"=="Bob");
console.log(0==false);
console.log(undefined==false);
console.log(NaN==NaN);