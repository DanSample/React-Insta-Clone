import React from 'react';

const Comment = props => {
  return (
    <div className="comment-text">
      <p>{props.comment.username}</p>
      <p>{props.comment.text}</p>
    </div>
  );
};
export default Comment;
