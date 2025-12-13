// Defining class
class Person{
    name: string;  // propartis 
    age: number;

    constructor(){  // constactor 
        this.name="";
        this.age= 0;

    }

    greet() {
        console.log(`hello, ${this.name}!`)
        console.log(`age= ${this.age}`)
        
    }
}

// create object using the person class
const user = new Person();
user.name ="rakib";
user.age = 33;
user.greet()

// others object 
const user2= new Person();
user2.name="Tushar";
user2.age= 12
user2.greet()