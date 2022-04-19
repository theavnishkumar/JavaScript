// The only operator in this group is the concatenation +. This operator will convert everything to a String if any of the operands is a String type. Finally, it will create a new character string, attaching the right operand at the end of the left operand.

let greeting="Hi";
console.log(greeting+" "+"Alice");

let sentence="Happy New Year ";
let newSentence=sentence+10191;

console.log(newSentence);
console.log(typeof newSentence);


// Compound Assignment Operators

let word="Happy New ";
word+="Year ";
word+="10191";
console.log(word);