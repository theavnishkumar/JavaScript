let a=-2;
try{
    a=b;
} catch(e){
    if(e instanceof ReferenceError){
        console.log("Reference error, reset a to -2");
    }
    else{
        console.log("Other error - "+ e);
    }
}
console.log(a);