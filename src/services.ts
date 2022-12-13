import { Comment } from "./types";

let comments = [{body: "comment 1"}, {body: "comment 2"}];

export const getComments = () => new Promise<Comment[]>((resolve) => {
    setTimeout(() => resolve(comments), 1000)
});

export const addComment = (comment: Comment) => new Promise((resolve) => {
    setTimeout(() => {
        comments.push(comment);
        resolve(null);
    }, 1000)
});
