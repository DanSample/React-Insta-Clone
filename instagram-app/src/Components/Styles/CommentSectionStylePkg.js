import styled, { css } from 'styled-components';

// Found in CommentSection.js

const CommentTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// Found in Likes.js

const CommentIconWrapper = styled.div`
  display: flex;
  padding: 1rem 0 0 1rem;
`;

const LikeIt = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 0 1rem 2rem;
  font-weight: bold;
`;

const Icon = styled.div`
  height: 4rem;
  width: 5rem;
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
  background-color: #E0E7E9;
  border: none;
  outline: none;
`;

export {
  CommentTextWrapper,
  CommentIconWrapper,
  LikeIt,
  Icon,
  CommentWrapper,
  UserName,
  UserText,
  CommentInputWrapper,
  CommentInputField
};
