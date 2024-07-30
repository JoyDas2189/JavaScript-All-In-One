class Car {
    constructor (name)  {
        this.name = name;
    }

    static brand() {
        return `Hello`;
    }
}

const myCar = new Car ("Toyota");

console.log(Car.brand());