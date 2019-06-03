import React from 'react';
import {
  CommentIconWrapper,
  LikeIt,
  Icon
} from '../Styles/CommentSectionStylePkg';

const Likes = props => {
  return (
    <CommentIconWrapper>
      <LikeIt onClick={props.addLike}>
        <Icon className="far fa-heart fa-2x" />
      </LikeIt>
      <Icon className="icon far fa-comment fa-2x" />
      {props.likes} Likes
    </CommentIconWrapper>
  );
};
export default Likes;
