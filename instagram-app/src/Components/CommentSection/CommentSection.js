import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId; //returns the value of postId (imageUrl) and sets it to id.
    if (localStorage.getItem(id)) {
      //if in local storage it finds id then...
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId)) //... take all postId in local storage and set it to state.
      });
    } else {
      this.saveComment(); // else instantiate the saveComment function.
    }
  }

  componentWillUnmount() {
    this.saveComment();
  }

  commentHandler = e => {
    e.preventDefault();
    this.setState({ comment: e.target.value }); // Sets the user input to state.
  };

  handleCommentSubmit = e => {
    e.preventDefault(); // Prevents the page from fully re rendering and only the component
    const newComment = { text: this.state.comment, username: 'DanTheDev3' }; //instantiate a new object with text set to
    console.log(newComment);
    const comments = this.state.comments.slice(); // copies comments from state and instantiates a new variable.
    comments.push(newComment); //pushes the copied comments to the newComment variable.
    this.setState({ comments, comment: '' }); //sets state
    setTimeout(() => {
      this.saveComment(); // Fires the setTimeout function after 0.5 sec.
    }, 500);
  };

  saveComment = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments) //set new items to state with a key value pair. The key is postId and
    );
  };

  render() {
    return (
      <div className="comment-text-wrapper">
        <div className="comment-icon-wrapper">
          <div className="icon far fa-heart fa-2x" />
          <div className="icon far fa-comment fa-2x" />
        </div>
        <div className="likes">{this.state.likes} Likes</div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentSection;
