class persons{
    name: string;
    age: number;

    constructor(name: string, age: number){ // constructor spacil mathod
        this.name= name;
        this.age= age;
    }

    great(){
        console.log(`hello ${this.name}`)
    }
}

// create new object
const users1 = new persons("tushar",44);
//call mathod 
users1.great()