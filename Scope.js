let height=180;
{
    let weight=70;
    console.log(height);
    console.log(weight);
}
console.log(height);
//console.log(weight); // Undefinied

let height2=200;
{
    let weight2=300;
    {
        let info="tall";
        console.log(height2);
        console.log(weight2);
        console.log(info);
    }
    console.log(weight2);
    console.log(height2);
    // console.log(info); // Undefined
}