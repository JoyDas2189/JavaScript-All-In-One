class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    sounds() {
        console.log(`${this.name} sounds bhrum Bhrum`);
    }
}
const supra = new Car ('Supra', 'Toyota');
const corolla = new Car ('Corolla', 'Toyota');
console.log(`Name ${supra.name} Brand ${supra.brand
    }` );
console.log(`Name ${corolla.name} Brand ${corolla.brand
    }` );
supra.sounds();
corolla.sounds();