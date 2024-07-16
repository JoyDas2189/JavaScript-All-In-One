const person = {
    firstName: "Joy",
    lastName: "Das",
    age: 24,
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    hobbies: {
        gaming: "Playing games.",
        travelling: "Travelling.",
    }
};
person. name = function() {
    return `${this.firstName} ${this.lastName}`.toLocaleUpperCase();
}

console.log(person.fullName());
console.log(person.hobbies.gaming);
console.log(person.name());