"use strict";
// project: Generic API response handler
Object.defineProperty(exports, "__esModule", { value: true });
// step-2: write to a function to fetcha api 
function handleApiResponse(response) {
    if (response.status === 200) {
        console.log("success", response.massage);
        return response.data;
    }
    else {
        throw new Error("Somthing went wrong!");
    }
}
// for a user api Response
const userRes = handleApiResponse({
    status: 200,
    massage: "user fatch successfully",
    data: {
        name: "Rana",
        age: 33
    }
});
// for a product API response 
const product = handleApiResponse({
    status: 200,
    massage: "produt fetch success",
    data: {
        titel: "shaban",
        price: 28
    }
});
// for product Array [] 
const products = handleApiResponse({
    status: 200,
    massage: " All products fetch successfully",
    data: ["product-1", "product-2", "product-3"]
});
//# sourceMappingURL=real-would-use.js.map