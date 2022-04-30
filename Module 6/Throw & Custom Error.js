// console.log("Start"); -> Start
// throw 100; -> Uncaught 100
// console.log("End");

console.log("Start");
try{
    throw "Throw Statement";
} catch(e){
    console.log(e);
}
console.log("End");