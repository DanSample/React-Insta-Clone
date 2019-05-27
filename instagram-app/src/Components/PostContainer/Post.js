import React from 'react';
import PropTypes from 'prop-types';
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
        <img className="post-image" alt="post" src={props.post.imageUrl} />
      </div>
      <CommentSection
        postId={props.post.imageUrl}
        comments={props.post.comments}
        likes={props.post.likes}
      />
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
      })
    ),
    likes: PropTypes.number
  })
};

export default Post;
