function person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const person1 = new person ("Joy", "Das", 24);
const person2 = new person ("Rahim", "Khan", 56);

person.prototype.nationality = "Bangladeshi";

console.log(`${person1.firstName} ${person1.lastName} ${person1.age}`);
console.log(`${person2.firstName} ${person2.lastName} ${person2.nationality}`)