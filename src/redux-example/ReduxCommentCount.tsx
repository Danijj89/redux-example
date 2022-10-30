import React from 'react';
import { useAppSelector } from '../app/hooks';
import { selectCommentsCount } from './duck/selectors';

export const ReduxCommentCount = () => {
    const commentsCount = useAppSelector(selectCommentsCount);

    return (
        <>
            <h2>Child Component</h2>
            <div>Comment Count: {commentsCount}</div>
        </>
    );
}