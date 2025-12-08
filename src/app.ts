let name: string = "tushar";
name = "korim";

let num: number = 22;
 num = 33; 

// boolean
let ispassed: boolean = false;


// Array 

let scores: number[] = [33,33,54,]
console.log(scores[2])

let names: Array<string>= ["korim","rohim","ratul"]
console.log(names)

// tuple 
let student: [string, number, boolean] = ["tushar",22,true]

// unknown
let value: unknown = 33;
if(typeof value=== "string"){
    console.log(value)
}
else{
    console.log("not")
}

// type alias

type student ={
    name: string,
    roll: number,
    avabole: boolean,
    subject: string[],
    info: [string,number,boolean]

}

let student1: student = {
    name : "tushar",
    roll : 33,
    avabole : true,
    subject : ["js","python","c++"],
    info : ["Tushar",20,true]
};

const student2: student={
    name : "rana",
    roll: 333,
    avabole: false,
    subject: ['bangla',"english"],
    info: ["rana",24,false]


}

console.log(student2)