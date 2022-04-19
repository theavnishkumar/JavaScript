// Both operator also use short-Circuit evaluation.

//if the first operand of AND is false, it will be returned, and no other will check will be performed.

//if the first operand of OR is true, it will be returned, and no other check will be made.

let x=0;
let y=0;
console.log(x++&&y++);
console.log(x);
console.log(y);

// The instruction y++ will never be executed, which may be confusing.