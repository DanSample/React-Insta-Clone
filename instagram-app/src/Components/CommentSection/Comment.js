import React from 'react';
import {
  CommentWrapper,
  UserName,
  UserText
} from '../Styles/CommentSectionStylePkg';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <CommentWrapper>
      <UserName>{props.comment.username}</UserName>
      <UserText>{props.comment.text}</UserText>
    </CommentWrapper>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;
