import React, { useState } from "react";
import { addComment, getComments } from "../services";
import { Comment } from "../types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ZustandCommentCount } from "./ZustandCommentCount";
import { useCommentStore } from "./global-store";

export const ReactQueryHome = () => {
  const [text, setText] = useState("");
  const { setStoreComments } = useCommentStore();

  const {data: comments, isLoading, isSuccess, isError} = useQuery<Comment[]>(
    {
      queryKey: ['comments'],
      queryFn: getComments,
      onSuccess: setStoreComments,
    });

  const onAddComment = useMutation({
    mutationFn: addComment,
  });

  return (
    <>
      {isLoading && "Loading..."}
      {isSuccess && (
        <>
          <h2>All Comments</h2>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button onClick={() => onAddComment.mutate({body: text})}>
            Add
          </button>
          <ul>
            {comments.map((comment) => (
              <li key={comment.body}>{comment.body}</li>
            ))}
          </ul>
          <ZustandCommentCount />
        </>
      )}
      {isError && "ERROR"}
    </>
  );
};
