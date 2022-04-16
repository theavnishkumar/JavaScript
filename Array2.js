let user1={
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

let user2={
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

let user3=[
    {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
    },
    {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
    }
];

user3[2]={
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHpurnell@rhyta"
};

console.log(user3[0].name);
console.log(user3[1].name);
console.log(user3[2].name);