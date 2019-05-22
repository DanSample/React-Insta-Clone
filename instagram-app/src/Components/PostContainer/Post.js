import React from 'react';
import PostHeader from '../PostContainer/PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
  return (
    <div className="post-wrapper">
      <PostHeader
        thumbnailUrl={props.post.thumbnailUrl}
        username={props.post.username}
      />
      <div className="post-image-wrapper">
        <img
          className="post-image"
          alt="post image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
