const Person = {
    firstName: "Joy",
    lastName: "Das",
    age: 24,
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let x = Person;
x.age = 23; //changing the value of age.

console.log(Person.fullName());
console.log(x.age);