import React from 'react';
import Post from './Post';

const PostContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.posts.map(p => (
        <Post key={imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostContainer;
