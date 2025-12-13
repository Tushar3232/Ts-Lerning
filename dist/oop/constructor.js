"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persons {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    great() {
        console.log(`hello ${this.name}`);
    }
}
// create new object
const users1 = new persons("tushar", 44);
//call mathod 
users1.great();
//# sourceMappingURL=constructor.js.map