import { RootState } from "../../app/store";

export const selectComments = (state: RootState) => state.comments.comments;
export const selectCommentsCount = (state: RootState) => state.comments.comments.length;