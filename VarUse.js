// in var declaring inside scope or outside of scope it will turn out to be global variable

//var ignores ordinary program blocks

var height=180;
{
    var weight=70;
    console.log(height);
    console.log(weight);
}
console.log(height);
console.log(weight);