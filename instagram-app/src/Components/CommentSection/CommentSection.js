import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div>
      {props.comments.map((c, i) => (
        <Comment key={i} comment={c} />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
