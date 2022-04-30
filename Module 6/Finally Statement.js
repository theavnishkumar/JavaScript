let a=10;
try{
    a=b;
} catch(e){
    console.log("An Error!");
} finally{
    console.log("Finally!")
}
console.log(a);

let c=10;
try{
    c=d;
} catch(e){
    console.log(d);
} finally{
    console.log("Finally!");
}