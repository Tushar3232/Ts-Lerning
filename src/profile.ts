// user profile and Interface extents 

// step-1 create an user interface
interface User {
    id: number;
    usename: string;
    email: string;
}

// step-2 crate an author interface 
interface Author extends User {
    bio: string;
    posts: string[];
}


// step-3 define user status using type
type status = "active" | "inactive" | "banned"

// step-4 create an author object

const author: Author ={
    id: 1,
    usename: "Tushar",
    email: "tushar@gmail.com",
    bio: "i am a full stack developer",
    posts: ["post-1","post-2","post-3"]
};

const accountStatus: status = "active";