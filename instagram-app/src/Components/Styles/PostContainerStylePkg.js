import styled from 'styled-components';

const PostContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PostWrapper = styled.div`
  max-width: 64.1rem;
  width: 100%;
  background-color: #fbfbfb;
  border: 1px solid lightgray;
  margin-top: 2.5rem;
`;

const PostHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const PostThumbWrapper = styled.div`
  height: 6rem;
  width: 6rem;
  padding-top: 1.5rem;
`;

const PostThumbImg = styled.img`
  height: auto;
  width: 3rem;
  border-radius: 5rem;
`;

export {
  PostContainerWrapper,
  PostWrapper,
  PostHeaderWrapper,
  PostThumbWrapper,
  PostThumbImg
};
