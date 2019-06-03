import styled, { css } from 'styled-components';
import Button from './Reusables/Buttons';

const LoginForm = styled.form`
  margin: 5.5rem auto;
  padding-top: 5rem; 
  background-color: rgba(53, 70, 73, 0.5);
  height: 50rem;
  width: 80%;
`;

const LoginHeader = styled.h2`
  font-size: 7rem;
  font-family: 'Dancing Script', cursive;
`;

const LoginPhrase = styled.div`
  font-size: 3rem;
  text-align: center;
  font-family: 'Dancing Script', cursive;
`;

const LoginInputContainer = styled.div`
  margin: 2rem auto;
  width: 20rem;
  height: 5rem;
`;

const LoginInputField = styled.input`
  width: 20rem;
  height: 3rem;
  border-radius: 5px;
  outline: none;

  ${props =>
    props.primary &&
    css`
      margin-bottom: 1rem;
    `}
`;

export {
  Button,
  LoginForm,
  LoginHeader,
  LoginPhrase,
  LoginInputContainer,
  LoginInputField
};
