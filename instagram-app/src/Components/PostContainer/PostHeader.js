import React from 'react';
import {
  PostHeaderWrapper,
  PostThumbWrapper,
  PostThumbImg
} from '../Styles/PostContainerStylePkg';

const PostHeader = props => {
  return (
    <PostHeaderWrapper>
      <PostThumbWrapper>
        <PostThumbImg
          className="post-thumb"
          alt="post thumbnail"
          src={props.thumbnailUrl}
        />
      </PostThumbWrapper>
      <div>{props.username}</div>
    </PostHeaderWrapper>
  );
};
export default PostHeader;
