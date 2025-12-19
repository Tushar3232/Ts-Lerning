// constraints 

function printLength<T extends { length: number }>(item: T) {
    console.log(item.length)
}


printLength<string>("hello bro how are you");
printLength<number[]>([2, 3, 5, 33, 55, 333, 44, 334, 88]);
printLength<string[]>(["dfjjk", "rakiv", "nisa"])

//id check 
interface HasId {
    id: number;
}

// const items1={
//     id: 244,
// }

function getId<T extends HasId>(item: T): number {  // interface use kora ata..best perctis
    return item.id
}

const result = getId({ id: 33 });
console.log("the result is:", result)