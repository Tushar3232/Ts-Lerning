// generics (super reusable)
function loadData <T>(data: T):void{
    console.log(data);
}

loadData <string>("string data");
loadData <number>(3333);

// New one 
function loodata <T> (data: T ){
    console.log(data)
}

loodata<string>("hello type");
loodata <number> (384989);
loodata <boolean> (false);
loodata <string[]> (["A","d","e"]);



// generics interface examle 
interface ApiResponse <T> {
    success: boolean;
    data: T 

}

const userResponse: ApiResponse <{name: string}> ={
    success: true,
    data: {
        name:"articel"
    }

}

// 2nd
const numberResponse: ApiResponse <number>={
    success: false,
    data: 25

}