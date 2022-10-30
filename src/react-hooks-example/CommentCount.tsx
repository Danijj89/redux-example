import React, { useContext } from 'react';
import { CommentsContext } from './CommentsContextProvider';

export const CommentCount = () => {
    const { comments } = useContext(CommentsContext);
    return (
        <>
            <h2>Child Component</h2>
            <div>Comment Count: {comments.length}</div>
        </>
    );
}