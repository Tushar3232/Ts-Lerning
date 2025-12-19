"use strict";
// constraints 
Object.defineProperty(exports, "__esModule", { value: true });
function printLength(item) {
    console.log(item.length);
}
printLength("hello bro how are you");
printLength([2, 3, 5, 33, 55, 333, 44, 334, 88]);
printLength(["dfjjk", "rakiv", "nisa"]);
// const items1={
//     id: 244,
// }
function getId(item) {
    return item.id;
}
const result = getId({ id: 33 });
console.log("the result is:", result);
//# sourceMappingURL=constraints.js.map