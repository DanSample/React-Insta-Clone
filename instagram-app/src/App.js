import React from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import Login from './Components/Login/LoginPage';
import withAuthenticate from './Components/Authenticate/withAuthenticate';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
export default App;
