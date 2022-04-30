function add(a,b){
    return a+b;
}

let myAdd=add;
console.log(myAdd(10,20));
console.log(add(20,20));

let myAdd2=function add(c,d){
    return c+d;
}

console.log(myAdd2(30,20));
console.log(add(40,20));

let myAdd3=function(e,f){
    return e+f;
}

console.log(myAdd3(50,20));