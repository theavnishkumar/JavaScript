let counter;
console.log(counter); // Value is un defined
{
    counter=1; // value is assigned
    console.log(counter);
}
counter+=1; // value is increased
console.log(counter);

let counter2;
console.log(counter2);
{
    counter2=1;
    {
        console.log(counter2);
    }
}
counter2+=1;
console.log(counter2);