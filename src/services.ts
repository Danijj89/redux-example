import { Comment } from "./types";


export const getComments: () => Promise<Comment[]> = () => new Promise((resolve) => {
    setTimeout(() => resolve([{body: "comment 1"}, {body: "comment 2"}]), 1000)
});