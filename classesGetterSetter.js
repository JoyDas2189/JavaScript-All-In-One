class Car {
    constructor(name) {
        this.name = name;
    }

    get carname() {
        return this.name;
    }
    set carname(value) {
        this.name = value;
    }
}
let myCar = new Car ('Toyota');

console.log(myCar.carname);