import React from 'react';
import Post from './Post';
import { PostContainerWrapper } from '../Styles/PostContainerStylePkg';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <PostContainerWrapper>
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} /> //the key is just to prevent an error stating a key is needed
      ))}
    </PostContainerWrapper>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          test: PropTypes.string
        })
      )
    })
  )
};

export default PostContainer;
