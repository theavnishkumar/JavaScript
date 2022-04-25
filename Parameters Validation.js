function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return 5+6;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10,20,30,40,50])); // -> 20
