import React from 'react';
import './LoginPage.css';

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
      <form className="login-form">
        <h2>Welcome To Insta Clone!</h2>
        <div>Please Login</div>
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={this.state.username} //value is set to state prop username
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={this.state.password} //value is set to state prop password
          onChange={this.handleInputChange}
        />
        <button className="btn" onClick={this.handleLoginSubmit}>
          Log In
        </button>
      </form>
    );
  }
}

export default Login;
