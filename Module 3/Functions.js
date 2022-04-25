let name="Alice";
let name2="Bob";

function Parent(){
    console.log(name);
    function Child(){
        console.log(name2);
    }
    Child();
}
Parent();
