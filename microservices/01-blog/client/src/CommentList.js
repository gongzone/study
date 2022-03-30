import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    content =
      comment.status === "approved"
        ? comment.content
        : comment.status === "pending"
        ? "This comment is awaiting moderation"
        : "This comment has been rejected";

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
