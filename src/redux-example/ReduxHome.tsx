import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addComment, CommentStateStatus } from "./duck/commentsSlice";
import { selectComments, selectCommentsStatus } from "./duck/selectors";
import { fetchComments as fetchCommentsThunk } from "./duck/thunks";
import { fetchComments as fetchCommentsAction } from "./duck/actions";
import { ReduxCommentCount } from "./ReduxCommentCount";
import { useSelector } from "react-redux";

export const ReduxHome = () => {
  const comments = useAppSelector(selectComments);
  const dispatch = useAppDispatch();
  const commentStatus = useSelector(selectCommentsStatus);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchCommentsThunk());
    // dispatch(fetchCommentsAction());
  }, [dispatch]);

  return (
    <>
      {commentStatus === CommentStateStatus.LOADING && "Loading..."}
      {commentStatus === CommentStateStatus.DONE && (
        <>
          <h2>All Comments</h2>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button onClick={() => dispatch(addComment({ body: text }))}>
            Add
          </button>
          <ul>
            {comments.map((comment) => (
              <li key={comment.body}>{comment.body}</li>
            ))}
          </ul>
          <ReduxCommentCount />
        </>
      )}
      {commentStatus === CommentStateStatus.FAILED && "ERROR"}
    </>
  );
};
