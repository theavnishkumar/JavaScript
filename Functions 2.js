function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
function operation(func, first, second){
    return func(first,second);
}
console.log(operation(add,10,20));
console.log(operation(multiply,10,20));

// The operation function takes as its first argument the function(parameter func) and call it with the other two arguments passed(parameters first and second).