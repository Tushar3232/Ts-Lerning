// project: Generic API response handler


// step-1: API response interface
interface ApiResponse <T> {
    status:number;
    massage: string;
    data: T 
}

// step-2: write to a function to fetcha api 
function handleApiResponse <T>(response: ApiResponse<T>){

    if(response.status === 200){
        console.log("success", response.massage);
        return response.data
    }
    else{
        throw new Error("Somthing went wrong!")
    }
}

// for a user api Response
 
const userRes = handleApiResponse <{name: string; age: number}>({
    status: 200,
    massage: "user fatch successfully",
    data: {
        name: "Rana",
        age: 33
    }
})

// for a product API response 
const product = handleApiResponse<{titel: string; price: number}>({
    status: 200,
    massage: "produt fetch success",
    data: {
        titel: "shaban",
        price: 28
    }
})

// for product Array [] 
const products = handleApiResponse<string []>({
    status: 200,
    massage: " All products fetch successfully",
    data:["product-1","product-2","product-3"]
})