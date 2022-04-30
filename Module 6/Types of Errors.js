// 1. Syntax Error

// "use strict";
// iff(true){ -> Uncaught SyntaxError: Unexpected token '{'
//     console.log("true");
// }

// 2. Refrence Error

// let a=b; -> Uncaught ReferenceError: b is not defined
// function(); -> Uncaught ReferenceError: fun is not defined

// 3. Typo Error

// const someConstValue=5;
// someConstValue=7; -> Uncaught TypeError: Assignment to constant variable

// let someNumber=10;
// someNumber.length(); -> Uncaught TypeError: someNumber.length is not a function

// 4. Range Error

// let testArray1=Array(10);
// console.log(testArray1.length); -> 10
// let testArray2=Array(-1); -> Uncaught RangeError: Invalid array length
// console.log(testArray2.length);

// 5. Other Error
// EvalError
// InternalError
// URIError