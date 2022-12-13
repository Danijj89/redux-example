import React, { useContext, useEffect, useState } from 'react';
import { CommentCount } from './CommentCount';
import { CommentsContext } from './context/CommentsContextProvider';
import { getComments } from '../services';
import { Comment } from '../types';

export const Home = () => {
    const { comments, dispatchSetComments, dispatchAddComment } = useContext(CommentsContext);
    const [text, setText] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const fetchedComments: Comment[] = await getComments();
            dispatchSetComments(fetchedComments);
        }
        fetchComments();
    }, [dispatchSetComments]);

    return (
        <>
            <h2>All Comments</h2>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text} />
            <button onClick={() => dispatchAddComment({ body: text })}>Add</button>
            <ul>
                {comments.map(comment => <li key={comment.body}>{comment.body}</li>)}
            </ul>
            <CommentCount />
        </>
    );
};