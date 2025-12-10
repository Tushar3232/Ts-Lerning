// lerning Union
type ProductId = string | number; // Union tipe

const getProduct = (id: ProductId) =>{
console.log(`fatching product by id: ${id}`)
}

getProduct("abc-product")
getProduct(234)

// Intersection tipe 

type User = {
    id: string,
    name: string,
};

type Admin ={
    isAdmin: boolean
};

type AdminUser = User & Admin; // & 

const admin: AdminUser ={
    id: "red",
    name: "Rakivb",
    isAdmin: true,

}

// Literal type 

let direction: "left" | "right" | "top";
direction = "top"

type Action = "start" | "stop" | "submit" | "reset";

const handelAction = (action: Action) =>{
    console.log(`Action: ${action}`)
}

handelAction("start")