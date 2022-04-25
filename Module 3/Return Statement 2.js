function getTrue(){
    return true;
}

let test=getTrue();
console.log(test);

let tempratures;
let meanTemp;

function getMeanTemp(){
    let sum=0;
    let result;
    for(let i=0; i<tempratures.length; i++){
        sum+=tempratures[i];
    }
    result=sum/tempratures.length;
    return result;
}

tempratures=[12,12,11,11,10,9,9,10,12,13,15,18,21,24,24,23,25,25,23,21,20,19,17,16];
meanTemp=getMeanTemp();
console.log(`mean: ${meanTemp}`);

tempratures=[17,16,14,12,10,10,10,11,13,14,15,17,22,27,26,24,21,19,18,17,16];
meanTemp=getMeanTemp();
console.log(`mean: ${meanTemp}`);