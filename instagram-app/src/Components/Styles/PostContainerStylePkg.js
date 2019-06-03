import styled from 'styled-components';

const PostContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PostWrapper = styled.div`
  max-width: 64.1rem;
  width: 100%;
  background-color: #e0e7e9;
  border: 1px solid #e0e7e9;
  border-radius: 15px;
  box-shadow: 3px 3px 10px 6px #354649;
  margin: 10rem 0 0 0;
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
