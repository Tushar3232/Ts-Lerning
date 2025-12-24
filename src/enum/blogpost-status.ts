// project : Blog post Status
enum PostStatus{
    Draft ="DRAFT",
    Published="PUBLISHED",
    Archived="ARCHIVED"
}
type BlogePost ={
    titel: string;
    content: string;
    status:PostStatus
}

const post1:BlogePost ={
    titel: "Intro to TS Enum",
    content:"Enum are very powerful",
    status: PostStatus.Published
}

console.log(post1.status)

//2nd blog post 
const post2: BlogePost={
    titel: "Learn js",
    content: "I will teach you js",
    status: PostStatus.Draft
}
console.log({post2})