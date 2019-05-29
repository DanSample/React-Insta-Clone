import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from '../PostContainer/PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import Likes from './Likes';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div className="post-wrapper">
        <PostHeader
          thumbnailUrl={this.props.post.thumbnailUrl}
          username={this.props.post.username}
        />
        <div className="post-image-wrapper">
          <img
            className="post-image"
            alt="post"
            src={this.props.post.imageUrl}
          />
        </div>
        <Likes likes={this.state.likes} addLike={this.incrementLike} />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
          likes={this.props.post.likes}
        />
      </div>
    );
  }
}

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
