var globalGreeting="Good ";

function testFunction(){
    var localGreeting="Morning";
    console.log("Function:");
    console.log(globalGreeting);
    console.log(localGreeting);
}
testFunction();

console.log("Main Program:");
console.log(globalGreeting);
// console.log(localGreeting);// Undefined