// let n=0;
// while(n<91);{
//     console.log(n);
//     n+=10;
// }

let isOver=false;
let counter;

while(!isOver){
    isOver=!confirm(`[${counter++}] Continue the loop?`)
}