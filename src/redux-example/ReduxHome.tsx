import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addComment } from './duck/commentsSlice';
import { selectComments } from './duck/selectors';
import { fetchComments } from './duck/thunks';
import { ReduxCommentCount } from './ReduxCommentCount';


export const ReduxHome = () => {
    const comments = useAppSelector(selectComments);
    const dispatch = useAppDispatch();
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <>
            <h2>All Comments</h2>
            <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
            <button onClick={() => dispatch(addComment({body: text}))}>Add</button>
            <ul>
                {comments.map(comment => <li key={comment.body}>{comment.body}</li>)}
            </ul>
            <ReduxCommentCount />
        </>
    );
};