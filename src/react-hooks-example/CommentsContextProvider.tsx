import { createContext, ReactNode, useCallback, useReducer } from "react";
import { CommentsActions } from "./commentsActions";
import { commentsReducer, CommentsReducerType } from "./commentsReducer";
import { Comment } from "../types";

type CommentsContextType = {
    comments: Comment[];
    dispatchSetComments: (comments: Comment[]) => void;
    dispatchAddComment: (comment: Comment) => void;
}

const defaultContext: CommentsContextType = {
    comments: [],
    dispatchSetComments: () => null,
    dispatchAddComment: () => null,
}

export const CommentsContext = createContext(defaultContext);

type CommentsContextPropTypes = {
    children: ReactNode
}

export const CommentsContextProvider = ({ children }: CommentsContextPropTypes) => {
    const [commentsState, commentsDispatch] = useReducer<CommentsReducerType>(commentsReducer, {
        comments: []
    });

    const dispatchSetComments = useCallback((comments: Comment[]) =>
        commentsDispatch({ type: CommentsActions.SET_COMMENTS, value: comments })
        , []);

    const dispatchAddComment = useCallback((comment: Comment) =>
        commentsDispatch({ type: CommentsActions.ADD_COMMENT, value: comment })
        , []);

    const value: CommentsContextType = {
        comments: commentsState.comments,
        dispatchSetComments,
        dispatchAddComment,
    }

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    )
} 