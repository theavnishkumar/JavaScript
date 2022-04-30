// function factorial(n){
//     let result=1;
//     for(; n>1; n--){
//         result*=n;
//     }
//     return result;
// }
// console.log(factorial(3)); //->6
// console.log(factorial(5)); //->120
// console.log(factorial(8)); //->40320
// console.log(factorial(20)); //->2432902008176640000
// console.log(factorial(1000)); //-> Infinity

function factorial(n){
    if(n>20){
        throw new RangeError("Max value 20");
    }
    let result=1;
    for(; n>1; n--){
        result*=n;
    }
    return result;
}
console.log(factorial(20));
console.log(factorial(1000));