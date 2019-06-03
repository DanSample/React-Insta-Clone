import styled from 'styled-components';
import Button from './Reusables/Buttons';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  position: fixed;
  width: 80%;
  height: 8rem;
  background-color: rgba(53, 70, 73, 0.5);
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  height: 3rem;
  width: 6rem;
  border-right: 1.5px solid #354649;
  margin-bottom: 0.35rem;
`;

const RightBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 100%;
`;

const Logo = styled.img`
  height: auto;
  width: 12rem;
  padding-left: 1rem;
`;

const Icon = styled.i`
  color: white;
`;

const Input = styled.input`
  text-align: center;
  width: 30rem;
  height: 4rem;
  font-size: 2rem;
  color: #fff;
  outline: none;
  background-color: rgba(53, 70, 73, 0.5);
  border: none;
  border-radius: 5px;
  margin-left: 30rem;

  ::placeholder {
    font-family: 'Dancing Script', cursive;
    font-size: 2.25rem;
    color: #fff;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 20rem;
`;

export {
  SearchBarWrapper,
  ImageWrapper,
  RightBarWrapper,
  Logo,
  Icon,
  Input,
  SocialWrapper,
  Button
};
