// This term means that functions can be treated as any data, which can be stored in variable or passed as argument to other functions.

function showMessage(message){
    console.log(`Message: ${message}`);
}

let sm=showMessage;
sm("This Works!");

console.log(typeof sm);

function doNothing(){
    return undefined;
}

let a=doNothing();
let b=doNothing;

console.log(typeof a);
console.log(typeof b);