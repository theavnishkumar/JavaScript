let add=function(a,b){
    return a+b;
}
console.log(add(10,20));
// can be written as

let add1=(e,f)=>{
    return e+f;
}
console.log(add1(20,20));

let add2=(c,d)=>c+d;
console.log(add2(20,30));

function factorial(n){
    return n>1?n*factorial(n-1):1;
}
console.log(factorial(5));

let names=["Alice","Eve","john"];
function showName(element){
    console.log(element);
}
names.forEach(showName);