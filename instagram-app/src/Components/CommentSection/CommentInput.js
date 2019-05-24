import React from 'react';

const CommentInput = () => {
  return (
    <form className="comment-input-wrapper">
      <input
        className="comment-input"
        type="text"
        placeholder="Add a comment..."
      />
    </form>
  );
};
export default CommentInput;
