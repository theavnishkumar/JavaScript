function factorial(n){
    let result=1;
    while(n>1){
        result*=n;
        n--;
    }
    return result;
}
console.log(factorial(6));

function factorialR (n) {
    return n > 1 ? n * factorialR(n - 1) : 1;
}

console.log(factorialR(6)); // -> 720