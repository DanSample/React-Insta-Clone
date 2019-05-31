import React from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      search: ''
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData, filteredPosts: dummyData });
  }

  handleSearchChange = e => {
    e.preventDefault();
    const searchTerm = e.target.value;
    const matchingPosts = this.state.posts
      .slice()
      .filter(p => p.username.includes(searchTerm));
    this.setState({
      search: searchTerm,
      filteredPosts: matchingPosts
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          search={this.state.search}
          filterPosts={this.handleSearchChange}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
