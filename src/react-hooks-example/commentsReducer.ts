import { Reducer } from "react";
import { CommentsActions, CommentsActionType } from "./commentsActions";
import { Comment } from "../types";

export type CommentsReducerState = {
    comments: Comment[];
}

export type CommentsReducerType = Reducer<CommentsReducerState, CommentsActionType>

export const commentsReducer: CommentsReducerType = (state: CommentsReducerState, action: CommentsActionType) => {
    const {type, value} = action;
    switch(type) {
        case CommentsActions.SET_COMMENTS:
            return {
                ...state,
                comments: [...value]
            }
        case CommentsActions.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, value]
            }
        default:
            return state;
    }
}