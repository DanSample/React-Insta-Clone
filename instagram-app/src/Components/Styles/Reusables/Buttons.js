import styled, { css } from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 5px;
  border: 2px solid lightgrey;
  color: black;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: 15rem;

  ${props =>
    props.logout &&
    css`
      background-color: #354649;
      color: white;
    `}
`;

export default Button;
