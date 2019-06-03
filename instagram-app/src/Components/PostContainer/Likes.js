import React from 'react';
import {
  CommentIconWrapper,
  LikeIt,
  LikeNumber,
  Icon
} from '../Styles/CommentSectionStylePkg';

const Likes = props => {
  return (
    <CommentIconWrapper>
      <LikeIt>
        <Icon onClick={props.addLike} className="far fa-heart fa-2x" />
      </LikeIt>
      <Icon className="icon far fa-comment fa-2x" />
      <LikeNumber>{props.likes} Likes</LikeNumber>
    </CommentIconWrapper>
  );
};
export default Likes;
