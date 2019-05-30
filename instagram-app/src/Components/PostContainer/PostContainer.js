import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import './PostContainer.css';

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} /> //the key is just to prevent an error stating a key is needed
      ))}
    </div>
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
