// Note that the catch keyword is followed by parentheses containing the parameter error. This is a variable name that will hold information about the error that was caught, and it can have any valid name, but the names error, err, or just e, are commonly used. In the case of an exception thrown by JavaScript, the error object will contain information about the error type, and is converted to a string to be logged or processed in any way the developer needs.

try{
    let a=b;
} catch (error){
    console.log("Caught "+error);
}
console.log("We handled the exception!");