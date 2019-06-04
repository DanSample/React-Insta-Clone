import React from 'react';
import {
  Button,
  LoginForm,
  LoginHeader,
  LoginPhrase,
  LoginInputContainer,
  LoginInputField
} from '../Styles/LoginStylePkg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value }); //Sets target name and value to state.
  };

  handleLoginSubmit = () => {
    const user = this.state.username; //Sets user to username in state
    localStorage.setItem('user', user); //Sets user in local storage as 'user'
    window.location.reload(); //This forces the entire page to reload
  };

  render() {
    return (
      <LoginForm>
        <LoginHeader>Welcome To Insta Clone!</LoginHeader>
        <LoginPhrase>Please Login</LoginPhrase>
        <LoginInputContainer>
          <LoginInputField
            primary
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username} //value is set to state prop username
            onChange={this.handleInputChange}
          />
          <LoginInputField
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password} //value is set to state prop password
            onChange={this.handleInputChange}
          />
        </LoginInputContainer>
        <Button onClick={this.handleLoginSubmit}>Log In</Button>
      </LoginForm>
    );
  }
}

export default Login;
