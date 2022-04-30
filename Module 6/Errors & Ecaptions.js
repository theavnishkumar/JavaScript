// let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
// let result = multiply(10, 20);
// console.log(result);


// let multipl = (a, b) => a + b;
// let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
// console.log(result);


let multiply=(a,b)=>a+b;  
let result=multiply(10,20);
console.log(result);

try{
    console.log("abc");
    conole.log("abc");
} catch(error){
    console.log(error.message);
}
