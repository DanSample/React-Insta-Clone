import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment-wrapper">
      <div className="username">{props.comment.username}</div>
      <div className="user-text">{props.comment.text}</div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;
