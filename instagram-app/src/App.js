import React from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">{/* */}</header>
        <div>
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}
export default App;
