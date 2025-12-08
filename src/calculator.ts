function add(a: number, b: number): number {
    return a +b ;

};

const sumbtract = (a: number, b:number): number =>{
 return a-b;
};

const multiply =(a: number, b: number): number =>{
 return a*b;
};

const divide = (a: number, b: number): number => {
    if(b===0){
        throw new Error("can't devide by zerro")
    }
    return a/b;
};

const power = (base: number, exponent: number=2): number =>{
    return Math.pow(base,exponent);
};

// final function 
const calculate = (operation: string, a:number, b:number): number =>{
    switch(operation){
        case "+" : return add(a,b);
        case "-" : return sumbtract(a,b);
        case "*" : return multiply(a,b);
        case "/" : return divide(a,b);
        case "^" : return power(a,b);

        default : throw new Error("Invalid operation")
    }

}

console.log("result",calculate("-",33,3))