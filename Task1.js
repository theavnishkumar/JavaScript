// Write a piece of code that will create variables and initialize them with values of Boolean, Number, BigInt, String and undefined types using (whenever possible) literals and constructor functions.Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, for example, in the following form: 1000 [number].

let num=10;
let bool=true;
let bigInt=123n;
let str="Avnish";
let ud=undefined;
let n=null;

console.log(
    `
    ${num},        : ${typeof num}
    ${bool},      : ${typeof bool}
    ${bigInt},       : ${typeof bigInt}
    ${str},    : ${typeof str}
    ${ud}, : ${typeof ud}
    ${n},      : ${typeof n}
    `
);