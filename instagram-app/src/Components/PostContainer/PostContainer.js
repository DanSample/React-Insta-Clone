import React from 'react';
import Post from './Post';
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

export default PostContainer;
