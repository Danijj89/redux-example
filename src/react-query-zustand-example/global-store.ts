import create from 'zustand';
import { Comment } from '../types';

type CommentStore = {
    comments: Comment[];
    setStoreComments: (comments: Comment[]) => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
    comments: [],
    setStoreComments: (comments: Comment[]) => set((state) => ({ ...state, comments }))
}));
