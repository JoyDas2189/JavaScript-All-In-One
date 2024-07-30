class Car {
    constructor(brand) {
        this.brand = brand;
    }

    carBrand() {
        return `I have a ${this.brand} car`;
    }
}

class Model extends Car {
    constructor(brand, name) {
        super(brand);
        this.name = name;
    }

    carModel() {
        return `${this.carBrand()} model is ${this.name}`;
    }
}

const myCar = new Model('Toyota', 'Mustang');

console.log(myCar.carModel());