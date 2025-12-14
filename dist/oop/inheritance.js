"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving..`);
    }
}
// subClass
class Dog extends Animal {
    bark() {
        console.log("woof.. woof!");
    }
}
const myDog = new Dog("tommy");
myDog.move();
//# sourceMappingURL=inheritance.js.map