"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// project : Blog post Status
var PostStatus;
(function (PostStatus) {
    PostStatus["Draft"] = "DRAFT";
    PostStatus["Published"] = "PUBLISHED";
    PostStatus["Archived"] = "ARCHIVED";
})(PostStatus || (PostStatus = {}));
const post1 = {
    titel: "Intro to TS Enum",
    content: "Enum are very powerful",
    status: PostStatus.Published
};
console.log(post1.status);
//2nd blog post 
const post2 = {
    titel: "Learn js",
    content: "I will teach you js",
    status: PostStatus.Draft
};
console.log({ post2 });
//# sourceMappingURL=blogpost-status.js.map