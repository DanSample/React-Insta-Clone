import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = props => {
  return (
    <div className="comment-text-wrapper">
      <div className="comment-icon-wrapper">
        <div className="icon far fa-heart fa-2x" />
        <div className="icon far fa-comment fa-2x" />
      </div>
      <div className="likes">{props.likes} Likes</div>
      {props.comments.map((c, i) => (
        <Comment key={i} comment={c} />
      ))}
      <CommentInput />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ 
      text: PropTypes.string, 
      username: PropTypes.string 
    })
  )
};

export default CommentSection;
