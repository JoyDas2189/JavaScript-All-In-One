const person = {
    firstName: "Joy",
    lastName: "Das",
    age: 24,
};

//using loop..

// let value = "";
// for(let x in person){
//     value += person[x] + " ";
// }
// console.log(value);

//using object value...

// const newPerson = Object.values(person);

// console.log(newPerson);



//using JSON.stringify...

let newPerson = JSON.stringify(person);
console.log(newPerson);