import styled from 'styled-components';

// Found in CommentSection.js

const CommentTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Found in Likes.js

const CommentIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIt = styled.div`
  display: flex;
  justify-content: flex-start;
  font-weight: bold;
`;

const Icon = styled.div`
  height: 5rem;
  width: 5rem;
  padding: 1rem 0 0 2rem;
`;

const LikeNumber = styled.div`
  padding-left: 1.5rem;
`;

// Found in Comment.js

const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.8rem;
  margin: 0.5rem 2rem;
`;

const UserName = styled.div`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
`;

const UserText = styled.div`
  text-align: left;
  padding-left: 0.5rem;
  width: 80%;
`;

// Found in CommentInput.js

const CommentInputWrapper = styled.form`
  display: flex;
  height: 5rem;
  width: 94%;
  border-top: 1px solid lightgray;
  margin: 2rem 0 0 2rem;
`;

const CommentInputField = styled.input`
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  background-color: #e0e7e9;
  border: none;
  outline: none;
`;

export {
  CommentTextWrapper,
  CommentIconWrapper,
  LikeIt,
  LikeNumber,
  Icon,
  CommentWrapper,
  UserName,
  UserText,
  CommentInputWrapper,
  CommentInputField
};
