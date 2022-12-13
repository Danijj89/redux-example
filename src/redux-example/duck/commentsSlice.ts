import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../types";
import { fetchComments } from "./thunks";

export enum CommentStateStatus {
    LOADING = 'loading',
    IDLE = 'idle',
    FAILED = 'failed',
}

export type CommentState = {
    status: CommentStateStatus;
    comments: Comment[];
}

const initialState: CommentState = {
    status: CommentStateStatus.IDLE,
    comments: [],
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        fetchComments: (state, action) => {
            state.comments = [{ body: "comment 1" }]
        },
        addComment: (state, action) => {
            state.comments.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = CommentStateStatus.LOADING;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = CommentStateStatus.IDLE;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state) => {
                state.status = CommentStateStatus.FAILED;
            })
    }
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;