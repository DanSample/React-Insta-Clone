import React from 'react';
import {
  CommentInputWrapper,
  CommentInputField
} from '../Styles/CommentSectionStylePkg';

const CommentInput = props => {
  return (
    <CommentInputWrapper onSubmit={props.submitComment}>
      <CommentInputField
        type="text"
        value={props.comment}
        placeholder="Add a comment..."
        onChange={props.changeComment}
      />
    </CommentInputWrapper>
  );
};
export default CommentInput;
