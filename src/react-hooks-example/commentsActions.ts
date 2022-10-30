export type CommentsActionType = {
    type: string;
    value: any;
}

export enum CommentsActions {
    SET_COMMENTS = 'SET_COMMENTS',
    ADD_COMMENT = 'ADD_COMMENT',
}