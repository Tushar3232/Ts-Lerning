// custome type guards 
 type Fish ={
    swim: ()=> void
 };

 type Bird ={
    fly: ()=> void;
 }

 function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
 }

 function move(pet: Fish | Bird){
    if(isFish(pet)) {
        pet.swim()
    }
    else{
        pet.fly
    }
 }

 const myfish: Fish={
    swim: ()=> console.log("my fish is swimming...")
 }

 move(myfish)