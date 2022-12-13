import React from 'react';
import { useCommentStore } from './global-store';


export const ZustandCommentCount = () => {
    const { comments } = useCommentStore();
    return (
        <>
            <h2>Child Component</h2>
            <div>Comment Count: {comments.length}</div>
        </>
    );
}
