import React from 'react';

const Comment = props => {
  return (
    <div className="comment-wrapper">
      <div className="username">{props.comment.username}</div>
      <div className="user-text">{props.comment.text}</div>
    </div>
  );
};
export default Comment;
