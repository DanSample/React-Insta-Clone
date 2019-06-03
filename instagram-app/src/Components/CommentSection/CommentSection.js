import React from 'react';
import CommentInput from './CommentInput';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { CommentTextWrapper } from '../Styles/CommentSectionStylePkg';
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
    const newComment = { text: this.state.comment, username: 'DanTheDev3' }; //instantiate a new object with text: set to this.state.comment which is the 'value' the input field. The username is just hardcoded currently.
    const comments = this.state.comments.slice(); // copies comments from state and instantiates a new variable.
    comments.push(newComment); //pushes the copied comments to the newComment variable.
    this.setState({ comments, comment: '' }); //sets state with new comment(s) and resets the input field
    setTimeout(() => {
      this.saveComment(); // Fires the saveComment() function after 0.5 sec.
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
      <CommentTextWrapper>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} /> //maps over the comment on state and creates a new 'Comment' with a username and text.
        ))}
        <CommentInput
          comment={this.state.comment} //passes this.state.comment to be used in the input field.
          submitComment={this.handleCommentSubmit} //passes handleCommentSubmit to be used onSubmit.
          changeComment={this.commentHandler} //passes handleCommentSubmit to be used onChange.
        />
      </CommentTextWrapper>
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
