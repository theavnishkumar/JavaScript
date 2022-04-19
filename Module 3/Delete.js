// The unary delete operator was introduced while discussing objects. It allows you to delete a selected field of the object whose name is indicated with an operand.

let user={
    name:"Alice",
    age:38
};

console.log(user.age);
delete user.age;
console.log(user.age);