import styled, { css } from 'styled-components';
import Button from './Reusables/Buttons';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  background-color: #6c7a89;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 2.5rem;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: flex-start;
  height: 3rem;
  width: 6rem;
  border-right: 1px solid grey;
  margin-top: 0.35rem;
`;

const RightBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: auto;
  width: 100%;
`;

const Logo = styled.img`
  height: auto;
  width: 10rem;
  margin-left: 0.75rem;
`;

const Input = styled.input`
  text-align: center;
  margin-top: 1rem;
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 20rem;
`;

export {
  SearchBarWrapper,
  ImageWrapper,
  RightBarWrapper,
  Logo,
  Input,
  SocialWrapper,
  Button
};
