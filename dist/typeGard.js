"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly;
    }
}
const myfish = {
    swim: () => console.log("my fish is swimming...")
};
move(myfish);
//# sourceMappingURL=typeGard.js.map