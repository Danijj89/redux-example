import { RootState } from "../../app/store";
import { CommentStateStatus } from "./commentsSlice";

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsCount = (state: RootState) => state.comments.comments.length;
export const selectCommentsStatus = (state: RootState): CommentStateStatus => state.comments.status;
