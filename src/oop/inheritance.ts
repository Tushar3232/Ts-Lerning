class Animal{  // parants class
    constructor(public name: string){

    }

    move(){
        console.log(`${this.name} is moving..`)
    }
}

// subClass
class Dog extends Animal{ // extend key woard to make subClass and axcess parants properti's
    bark() {
        console.log("woof.. woof!")
    }
}

const myDog = new Dog("tommy")
myDog.move()