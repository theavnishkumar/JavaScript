let a=10;
try{
    a=b;
}catch(e){
    try{
        console.log(b);
    }catch(e){
        console.log("Second Catch!");
    }
}finally{
    console.log("Finally");
}