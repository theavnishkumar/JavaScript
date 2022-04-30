let inner=function(){
    console.log('inner 1');
}

let outer=function(callback){
    console.log('outer 1');
    callback();
    console.log('outer 2');
}

console.log('Test 1');
outer(inner);
console.log('Test 2');